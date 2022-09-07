import { PromotionType } from '@/entities'
import {
  BUSINESS_CARDS_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import useNotifications from '../useNotifications'
import useCreatePromotion from './useCreatePromotion'

export default function useCreatePromotionForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()

  const todayDate = new Date()

  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      owner: '',
      company: '',
      card: '',
      name: '',
      description: '',
      type: PromotionType.Standard,
      validFrom: todayDate,
      validTo: todayDate
    },
    onSubmit: formValues => {
      mutate(formValues)
    }
  })

  const { isLoading, isError, isSuccess, mutate } = useCreatePromotion({
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
