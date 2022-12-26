import { Promotion, Card } from '@/entities'
import useGetCurrentCompany from '../company/useGetCurrentCompany'
import useGetPromotions from './useGetPromotions'

export default function usePromotionsGroupedByCard() {
  const currentCompany = useGetCurrentCompany()
  const { data: promotions = [] } = useGetPromotions(currentCompany?.id ?? '')

  const groups = promotions.reduce(
    (acc: Record<Card['id'], Promotion[]>, promotion) => {
      const cardId = promotion.card

      if (!acc[cardId]) {
        acc[cardId] = [promotion]
      } else {
        acc[cardId].push(promotion)
      }
      return acc
    },
    {}
  )

  return groups
}
