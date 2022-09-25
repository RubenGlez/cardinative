import {
  BUSINESS_CARDS_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import useNotifications from '../components/useNotifications'
import useCreateCard from './useCreateCard'

export default function useCreateCardForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()

  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      company: '',
      name: '',
      color: '',
      logo: '',
      description: ''
    },
    onSubmit: formValues => {
      mutate(formValues)
    }
  })

  const { isLoading, isError, isSuccess, mutate } = useCreateCard({
    handleSuccess: () => {
      resetForm()
      navigate(BUSINESS_STACK, {
        screen: BUSINESS_TABS_STACK,
        params: {
          screen: BUSINESS_CARDS_SCREEN
        }
      })
    },
    handleError: (error: any) => {
      showErrorToast({
        text1: error.message
      })
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
