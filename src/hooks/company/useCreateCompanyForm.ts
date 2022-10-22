import {
  BUSINESS_COMPANIES_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK,
  ROLE_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import useNotifications from '../components/useNotifications'
import useCreateCompany from './useCreateCompany'

export default function useCreateCompanyForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()

  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      name: 'Empresa número 1',
      description: 'Descripción de la empresa',
      contact: {
        email: 'empresaurio@gmail.com',
        phone: '600 900 888',
        web: 'empresaurios.com'
      }
    },
    onSubmit: formValues => {
      mutate(formValues)
    }
  })

  const { isLoading, isError, isSuccess, mutate } = useCreateCompany({
    handleSuccess: () => {
      resetForm()
      navigate(ROLE_STACK, {
        screen: BUSINESS_STACK,
        params: {
          screen: BUSINESS_TABS_STACK,
          params: {
            screen: BUSINESS_COMPANIES_SCREEN
          }
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
