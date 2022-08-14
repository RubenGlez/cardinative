import { UserRole } from '@/entities'
import { SignUpInputData, signupRequest } from '@/lib/api/auth'
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

export default function useSignUpForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: SignUpInputData) => signupRequest(inputData),
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

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      role: UserRole.Basic
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
    setFieldValue,
    values
  }
}
