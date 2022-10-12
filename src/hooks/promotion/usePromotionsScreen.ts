import { useCallback, useMemo, useState } from 'react'
import useGetPromotions from '@/hooks/promotion/useGetPromotions'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'
import {
  BUSINESS_STACK,
  CREATE_PROMOTION_SCREEN,
  EDIT_PROMOTION_SCREEN
} from '@/navigation/constants'
import { Promotion } from '@/entities/Promotion'
import useDeletePromotion from '@/hooks/promotion/useDeletePromotion'
import useLiveSearch from '@/hooks/common/useLiveSearch'
import useGetCurrentCompany from '../company/useGetCurrentCompany'
import useGetCards from '../card/useGetCards'
import { Card } from '@/entities'

const DEFAULT_CARDS_FILTER_VALUE = '__all__'

export default function usePromotionsScreen() {
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion>()
  const { navigate } = useNavigation<RootNavigation>()
  const { data: promotions = [] } = useGetPromotions()
  const { data: cards = [] } = useGetCards()
  const currentCompany = useGetCurrentCompany()
  const cardsFilterOptions = useMemo(() => {
    const opts = cards
      .filter(card => {
        if (!currentCompany?.id) return true
        return card.company === currentCompany?.id
      })
      .map(card => ({ label: card.name, value: card.id }))
    return [{ label: 'All', value: DEFAULT_CARDS_FILTER_VALUE }, ...opts]
  }, [cards, currentCompany?.id])
  const [cardsFilterValue, setCardsFilterValue] = useState<Card['id']>(
    DEFAULT_CARDS_FILTER_VALUE
  )
  const handleChangeCardsFilterValue = useCallback((id: Card['id']) => {
    setCardsFilterValue(id)
  }, [])
  const promotionsList = useMemo(
    () =>
      promotions.filter(promo => {
        if (!currentCompany?.id) return true
        if (promo.company !== currentCompany?.id) return false
        if (cardsFilterValue === DEFAULT_CARDS_FILTER_VALUE) return true
        return promo.card === cardsFilterValue
      }),
    [cardsFilterValue, currentCompany?.id, promotions]
  )
  const { search, filteredOptions } = useLiveSearch({
    options: promotionsList,
    searchParams: ['name']
  })
  const { mutate } = useDeletePromotion({})
  const handleShowDetails = useCallback(
    (id: Promotion['id']) => () => {
      const promotion = promotionsList.find(promo => promo.id === id)
      setSelectedPromotion(promotion)
    },
    [promotionsList]
  )
  const handleCloseDetails = useCallback(() => {
    setSelectedPromotion(undefined)
  }, [])
  const handleGoToEdit = useCallback(
    (id: Promotion['id']) => {
      if (!id) return
      navigate(BUSINESS_STACK, {
        screen: EDIT_PROMOTION_SCREEN,
        params: {
          promotionIdToEdit: id
        }
      })
    },
    [navigate]
  )
  const handleDelete = useCallback(
    (id: Promotion['id']) => {
      if (!id) return
      mutate(id)
    },
    [mutate]
  )
  const handleGoToCreate = useCallback(() => {
    navigate(BUSINESS_STACK, {
      screen: CREATE_PROMOTION_SCREEN
    })
  }, [navigate])

  return {
    selectedPromotion,
    search,
    filteredOptions,
    handleShowDetails,
    handleCloseDetails,
    handleGoToEdit,
    handleDelete,
    handleGoToCreate,
    cardsFilterOptions,
    cardsFilterValue,
    handleChangeCardsFilterValue
  }
}
