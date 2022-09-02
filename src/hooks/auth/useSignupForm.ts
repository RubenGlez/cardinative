import { useCallback, useEffect } from 'react'
import { UserRole } from '@/entities'
import { SignUpInputData, signupRequest } from '@/lib/api/requests/auth'
import {
  BUSINESS_HOME_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK,
  HOME_SCREEN,
  MAIN_STACK,
  MAIN_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import useNotifications from '../useNotifications'
import useAuthSession from './useAuthSession'

export default function useSignUpForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()
  const [authSession, setAuthSession] = useAuthSession()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: SignUpInputData) => signupRequest(inputData),
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

  const handleChangeUserRole = useCallback(
    (value: boolean) => {
      setFieldValue('role', value ? UserRole.Business : UserRole.Basic)
    },
    [setFieldValue]
  )

  useEffect(() => {
    if (authSession.userId && values.role) {
      const userHasBasicRole = values.role === UserRole.Basic
      if (userHasBasicRole) {
        navigate(MAIN_STACK, {
          screen: MAIN_TABS_STACK,
          params: {
            screen: HOME_SCREEN
          }
        })
      } else {
        navigate(BUSINESS_STACK, {
          screen: BUSINESS_TABS_STACK,
          params: {
            screen: BUSINESS_HOME_SCREEN
          }
        })
      }
    }
  }, [authSession, navigate, values.role])

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
