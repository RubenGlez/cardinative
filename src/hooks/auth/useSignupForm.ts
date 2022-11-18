import { useCallback } from 'react'
import { UserRole } from '@/entities'
import { SignUpInputData, signupRequest } from '@/lib/api/requests/auth'
import { useFormik } from 'formik'
import { useMutation } from '@/lib/queryClient'
import useNotifications from '../components/useNotifications'
import useAuthSession from './useAuthSession'

export default function useSignUpForm() {
  const { showErrorToast } = useNotifications()
  const [, setAuthSession] = useAuthSession()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: SignUpInputData) => signupRequest(inputData),
    {
      onSuccess: ({ data }: any) => {
        setAuthSession({
          userId: data.userId,
          accessToken: data.accessToken,
          userRole: data.userRole
        })
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
      email: 'business@gmail.com',
      password: '1234',
      username: 'Juan Pérez',
      role: UserRole.Basic
    },
    onSubmit: formValues => {
      mutate(formValues)
    }
  })

  const handleChangeUserRole = useCallback(
    (value: boolean) => {
      setFieldValue('role', value ? UserRole.Business : UserRole.Basic)
    },
    [setFieldValue]
  )

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    handleChangeUserRole,
    values
  }
}
