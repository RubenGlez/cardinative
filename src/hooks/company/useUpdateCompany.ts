import { Company } from '@/entities/Company'
import {
  UpdateCompanyInputData,
  updateCompanyRequest
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
import useGetCompany from './useGetCompany'

export default function useUpdateCompany(companyId: Company['id'] | undefined) {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()
  const { data: company } = useGetCompany(companyId)

  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      id: company?.id ?? '',
      name: company?.name ?? '',
      description: company?.description ?? '',
      contact: {
        email: company?.contact?.email ?? '',
        phone: company?.contact?.phone ?? '',
        web: company?.contact?.web ?? ''
      }
    },
    onSubmit: formValues => {
      mutate(formValues)
    },
    enableReinitialize: true
  })

  const queryClient = useQueryClient()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: UpdateCompanyInputData) => updateCompanyRequest(inputData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['companies'])
        resetForm()
        navigate(BUSINESS_STACK, {
          screen: BUSINESS_TABS_STACK,
          params: {
            screen: BUSINESS_HOME_SCREEN
          }
        })
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
