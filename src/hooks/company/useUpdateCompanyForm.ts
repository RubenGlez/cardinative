import { Company } from '@/entities/Company'
import {
  BUSINESS_HOME_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import useNotifications from '../useNotifications'
import useGetCompany from './useGetCompany'
import useUpdateCompany from './useUpdateCompany'

export default function useUpdateCompanyForm(
  companyId: Company['id'] | undefined
) {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()
  const { data: company, isLoading: isLoadingGetCompany } =
    useGetCompany(companyId)

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

  const {
    isLoading: isLoadingUpdateCompany,
    isError,
    isSuccess,
    mutate
  } = useUpdateCompany({
    handleSuccess: () => {
      resetForm()
      navigate(BUSINESS_STACK, {
        screen: BUSINESS_TABS_STACK,
        params: {
          screen: BUSINESS_HOME_SCREEN
        }
      })
    },
    handleError: (error: any) => {
      showErrorToast({
        text1: error.message
      })
    }
  })

  const isLoading = isLoadingGetCompany || isLoadingUpdateCompany

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    values
  }
}
