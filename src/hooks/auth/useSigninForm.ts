import { UserRole } from '@/entities'
import { signinRequest, SignInInputData } from '@/lib/api/auth'
import { setDeviceStorageItem } from '@/lib/deviceStorage'
import {
  BUSINESS_STACK,
  CREATE_COMPANY_SCREEN,
  HOME_SCREEN,
  MAIN_STACK,
  MAIN_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import useNotifications from '../useNotifications'

export default function useSignInForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: SignInInputData) => signinRequest(inputData),
    {
      onSuccess: ({ data }: any) => {
        setDeviceStorageItem('userId', data.userId ?? '')
        setDeviceStorageItem('accessToken', data.accessToken ?? '')

        if (data.role === UserRole.Basic) {
          navigate(MAIN_STACK, {
            screen: MAIN_TABS_STACK,
            params: {
              screen: HOME_SCREEN
            }
          })
        } else {
          navigate(BUSINESS_STACK, {
            screen: CREATE_COMPANY_SCREEN
          })
        }
      },
      onError: (error: any) => {
        showErrorToast({
          text1: error.message
        })
      }
    }
  )

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: 'rubenprueba@gmail.com',
      password: '1234'
    },
    onSubmit: (formValues, { resetForm }) => {
      mutate(formValues)
      resetForm()
    }
  })

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    values
  }
}
