import { Promotion, PromotionType } from '@/entities/Promotion'
import {
  BUSINESS_CARDS_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import useNotifications from '../useNotifications'
import useGetPromotion from './useGetPromotion'
import useUpdatePromotion from './useUpdatePromotion'

const todayDate = new Date()

export default function useUpdatePromotionForm(
  promotionId: Promotion['id'] | undefined
) {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()
  const { data: promotion, isLoading: isLoadingGetPromotion } =
    useGetPromotion(promotionId)

  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      id: promotion?.id ?? '',
      owner: promotion?.owner ?? '',
      company: promotion?.company ?? '',
      card: promotion?.card ?? '',
      name: promotion?.name ?? '',
      description: promotion?.description ?? '',
      type: promotion?.type ?? PromotionType.Standard,
      validFrom: promotion?.validFrom ?? todayDate,
      validTo: promotion?.validTo ?? todayDate
    },
    onSubmit: formValues => {
      mutate(formValues)
    },
    enableReinitialize: true
  })

  const {
    isLoading: isLoadingUpdatePromotion,
    isError,
    isSuccess,
    mutate
  } = useUpdatePromotion({
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

  const isLoading = isLoadingGetPromotion || isLoadingUpdatePromotion

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    values
  }
}
