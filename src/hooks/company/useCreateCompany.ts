import {
  CreateCompanyInputData,
  createCompanyRequest
} from '@/lib/api/requests/company'
import {
  BUSINESS_HOME_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { useMutation, useQueryClient } from 'react-query'
import useNotifications from '../useNotifications'

export default function useCreateCompany() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()
  const queryClient = useQueryClient()

  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      name: '',
      description: '',
      contact: {
        email: '',
        phone: '',
        web: ''
      }
    },
    onSubmit: formValues => {
      mutate(formValues)
    }
  })

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: CreateCompanyInputData) => createCompanyRequest(inputData),
    {
      onSuccess: () => {
        resetForm()
        navigate(BUSINESS_STACK, {
          screen: BUSINESS_TABS_STACK,
          params: {
            screen: BUSINESS_HOME_SCREEN
          }
        })
        queryClient.invalidateQueries(['companies'])
      },
      onError: (error: any) => {
        showErrorToast({
          text1: error.message
        })
      }
    }
  )

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    values
  }
}
