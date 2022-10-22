import { useCallback, useMemo, useState } from 'react'
import useGetCards from '@/hooks/card/useGetCards'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'
import {
  BUSINESS_STACK,
  CREATE_CARD_SCREEN,
  EDIT_CARD_SCREEN,
  ROLE_STACK
} from '@/navigation/constants'
import { Card, CardExtended } from '@/entities/Card'
import useDeleteCard from '@/hooks/card/useDeleteCard'
import useLiveSearch from '@/hooks/common/useLiveSearch'
import usePromotionsGroupedByCard from '../promotion/usePromotionsGroupedByCard'
import useGetCurrentCompany from '../company/useGetCurrentCompany'

export default function useCardsScreen() {
  const [selectedCard, setSelectedCard] = useState<CardExtended>()
  const { navigate } = useNavigation<RootNavigation>()
  const { data: cards = [] } = useGetCards()
  const currentCompany = useGetCurrentCompany()
  const promotionsGroupedByCard = usePromotionsGroupedByCard()
  const cardsList = useMemo(
    () =>
      cards
        .map(card => ({
          ...card,
          promotions: promotionsGroupedByCard[card.id] ?? []
        }))
        .filter(card => {
          if (!currentCompany?.id) return true
          return card.company === currentCompany?.id
        }),
    [cards, currentCompany?.id, promotionsGroupedByCard]
  )
  const { search, filteredOptions } = useLiveSearch({
    options: cardsList,
    searchParams: ['name']
  })
  const { mutate } = useDeleteCard({})
  const handleShowDetails = useCallback(
    (id: Card['id']) => () => {
      const card = cardsList.find(comp => comp.id === id)
      setSelectedCard(card)
    },
    [cardsList]
  )
  const handleCloseDetails = useCallback(() => {
    setSelectedCard(undefined)
  }, [])
  const handleGoToEdit = useCallback(
    (id: Card['id']) => {
      if (!id) return
      navigate(ROLE_STACK, {
        screen: BUSINESS_STACK,
        params: {
          screen: EDIT_CARD_SCREEN,
          params: {
            cardIdToEdit: id
          }
        }
      })
    },
    [navigate]
  )
  const handleDelete = useCallback(
    (id: Card['id']) => {
      if (!id) return
      mutate(id)
    },
    [mutate]
  )
  const handleGoToCreate = useCallback(() => {
    navigate(ROLE_STACK, {
      screen: BUSINESS_STACK,
      params: {
        screen: CREATE_CARD_SCREEN
      }
    })
  }, [navigate])

  return {
    selectedCard,
    search,
    filteredOptions,
    handleShowDetails,
    handleCloseDetails,
    handleGoToEdit,
    handleDelete,
    handleGoToCreate
  }
}
