import { Promotion } from '@/entities'
import useGetCurrentCompany from '../company/useGetCurrentCompany'
import useGetPromotions from '../promotion/useGetPromotions'

export default function useMetrics() {
  const today = new Date()

  const currentCompany = useGetCurrentCompany()
  const { data: promotions = [] } = useGetPromotions()

  const currentCompanyPromotions = promotions.filter(promotion => {
    return promotion.company === currentCompany?.id
  })

  const splitbyDate = currentCompanyPromotions.reduce(
    (total: { onDate: Promotion[]; outDate: Promotion[] }, current) => {
      if (
        new Date(current.validFrom) <= today &&
        new Date(current.validTo) >= today
      ) {
        total.onDate.push(current)
      } else {
        total.outDate.push(current)
      }
      return total
    },
    { onDate: [], outDate: [] }
  )

  // TODO
  const onDatePromotionsSortedBySubscriptions = splitbyDate.onDate

  // TODO
  const onDatePromotionsSortedByCompletedSubscriptions = splitbyDate.onDate

  return {
    promotionsOutDate: splitbyDate.outDate,
    onDatePromotionsSortedBySubscriptions,
    onDatePromotionsSortedByCompletedSubscriptions
  }
}
