import { Card } from '@/entities/Card'
import {
  BUSINESS_CARDS_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import useNotifications from '../components/useNotifications'
import useGetCard from './useGetCard'
import useUpdateCard from './useUpdateCard'

export default function useUpdateCardForm(cardId: Card['id'] | undefined) {
  const { showErrorToast } = useNotifications()
  const { navigate } = useNavigation<RootNavigation>()
  const { data: card, isLoading: isLoadingGetCard } = useGetCard(cardId)

  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      id: card?.id ?? '',
      owner: card?.owner ?? '',
      company: card?.company ?? '',
      name: card?.name ?? '',
      color: card?.color ?? '',
      logo: card?.logo ?? '',
      description: card?.description ?? ''
    },
    onSubmit: formValues => {
      mutate(formValues)
    },
    enableReinitialize: true
  })

  const {
    isLoading: isLoadingUpdateCard,
    isError,
    isSuccess,
    mutate
  } = useUpdateCard({
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

  const isLoading = isLoadingGetCard || isLoadingUpdateCard

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    values
  }
}
