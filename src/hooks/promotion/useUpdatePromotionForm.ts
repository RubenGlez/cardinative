import { Promotion, PromotionType } from '@/entities/Promotion'
import {
  BUSINESS_PROMOTIONS_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import useGetCards from '../card/useGetCards'
import useGetCompanies from '../company/useGetCompanies'
import useNotifications from '../components/useNotifications'
import useGetPromotion from './useGetPromotion'
import useUpdatePromotion from './useUpdatePromotion'

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
      validFrom: promotion?.validFrom ?? '',
      validTo: promotion?.validTo ?? ''
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
          screen: BUSINESS_PROMOTIONS_SCREEN
        }
      })
    },
    handleError: (error: any) => {
      showErrorToast({
        text1: error.message
      })
    }
  })

  const { data: companies = [], isLoading: isLoadingCompanies } =
    useGetCompanies()

  const { data: cards = [], isLoading: isLoadingCards } = useGetCards()

  const isLoading =
    isLoadingGetPromotion ||
    isLoadingUpdatePromotion ||
    isLoadingCompanies ||
    isLoadingCards

  const companyOptions = companies?.map(comp => ({
    label: comp.name,
    value: comp.id ?? ''
  }))

  const cardsOptions = cards?.map(card => ({
    label: card.name,
    value: card.id ?? ''
  }))

  const typesOptions = [
    {
      label: 'Básica',
      value: PromotionType.Standard
    },
    {
      label: 'Otra',
      value: PromotionType.Other
    }
  ]

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    values,
    companyOptions,
    cardsOptions,
    typesOptions
  }
}
