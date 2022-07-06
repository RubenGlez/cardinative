import { UserRole } from '@/entities'
import { SignUpInputData, signupRequest } from '@/lib/api/auth'
import { setDeviceStorageItem } from '@/lib/deviceStorage'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import useNotifications from '../useNotifications'

export default function useSignupForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: SignUpInputData) => signupRequest(inputData),
    {
      onSuccess: ({ data }: any) => {
        setDeviceStorageItem('userId', data.userId ?? '')
        setDeviceStorageItem('accessToken', data.accessToken ?? '')
        navigate('MainStack', {
          screen: 'HomeScreen'
        })
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
    values
  }
}
