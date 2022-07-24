import { signinRequest, SignInInputData } from '@/lib/api/auth'
import { setDeviceStorageItem } from '@/lib/deviceStorage'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import useNotifications from '../useNotifications'

export default function useSigninForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: SignInInputData) => signinRequest(inputData),
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
