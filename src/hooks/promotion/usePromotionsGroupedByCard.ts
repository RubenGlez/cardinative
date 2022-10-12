import { Promotion, Card } from '@/entities'
import useGetPromotions from './useGetPromotions'

export default function usePromotionsGroupedByCard() {
  const { data: promotions = [] } = useGetPromotions()

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
