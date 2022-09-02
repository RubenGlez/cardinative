import { UserRole } from '@/entities'
import { signinRequest, SignInInputData } from '@/lib/api/requests/auth'
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
import { useEffect } from 'react'
import { useMutation } from 'react-query'
import useNotifications from '../useNotifications'
import useGetUserById from '../user/useGetUserById'
import useAuthSession from './useAuthSession'

export default function useSignInForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()
  const [authSession, setAuthSession] = useAuthSession()
  const { data: userData } = useGetUserById(authSession.userId)

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
      email: 'business@gmail.com',
      password: '1234'
    },
    onSubmit: (formValues, { resetForm }) => {
      mutate(formValues)
      resetForm()
    }
  })

  useEffect(() => {
    if (!userData?.role) return

    const userHasBasicRole = userData.role === UserRole.Basic
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
  }, [navigate, userData])

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    values
  }
}
