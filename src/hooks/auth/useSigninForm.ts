import { signinRequest, SignInInputData } from '@/lib/api/requests/auth'
import { useFormik } from 'formik'
import { useMutation } from '@/lib/queryClient'
import useNotifications from '../components/useNotifications'
import useAuthSession from './useAuthSession'

export default function useSignInForm() {
  const { showErrorToast } = useNotifications()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [authSession, setAuthSession] = useAuthSession()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: SignInInputData) => signinRequest(inputData),
    {
      onSuccess: ({ data }: any) => {
        setAuthSession({
          userId: data.userId,
          accessToken: data.accessToken
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
      // email: 'ruben@gmail.com',
      email: 'business1@gmail.com',
      password: '1234'
    },
    onSubmit: formValues => {
      mutate(formValues)
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
