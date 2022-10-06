import { Promotion, Company } from '@/entities'
import useGetPromotions from './useGetPromotions'

export default function usePromotionsGroupedByCompany() {
  const { data: promotions = [] } = useGetPromotions()

  const groups = promotions.reduce(
    (acc: Record<Company['id'], Promotion[]>, promotion) => {
      const compId = promotion.company

      if (!acc[compId]) {
        acc[compId] = [promotion]
      } else {
        acc[compId].push(promotion)
      }
      return acc
    },
    {}
  )

  return groups
}
