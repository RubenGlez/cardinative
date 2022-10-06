import { Card, Company } from '@/entities'
import useGetCards from './useGetCards'

export default function useCardsGroupedByCompany() {
  const { data: cards = [] } = useGetCards()

  const groups = cards.reduce((acc: Record<Company['id'], Card[]>, card) => {
    const compId = card.company

    if (!acc[compId]) {
      acc[compId] = [card]
    } else {
      acc[compId].push(card)
    }
    return acc
  }, {})

  return groups
}
