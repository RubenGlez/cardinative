import { PromotionType } from '@/entities'
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
import useCreatePromotion from './useCreatePromotion'

export default function useCreatePromotionForm() {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()

  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      owner: '',
      company: '',
      card: '',
      name: '',
      description: '',
      type: '' as PromotionType,
      validFrom: '',
      validTo: ''
    },
    onSubmit: formValues => {
      mutate(formValues)
    }
  })

  const {
    isLoading: isLoadingSubmit,
    isError,
    isSuccess,
    mutate
  } = useCreatePromotion({
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

  const isLoading = isLoadingCompanies || isLoadingCards || isLoadingSubmit

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
