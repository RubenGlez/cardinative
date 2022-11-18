import { Promotion, SubscriptionStatus } from '@/entities'
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

  const onDatePromotionsSortedBySubscriptions = splitbyDate.onDate.sort(
    (a, b) => {
      const subsA = a.subscriptions.length
      const subsB = b.subscriptions.length
      return subsB - subsA
    }
  )

  const onDatePromotionsSortedByCompletedSubscriptions =
    splitbyDate.onDate.sort((a, b) => {
      const completedSubsA = a.subscriptions.filter(
        sub => sub.status === SubscriptionStatus.completed
      ).length
      const completedSubsB = b.subscriptions.filter(
        sub => sub.status === SubscriptionStatus.completed
      ).length
      return completedSubsB - completedSubsA
    })

  return {
    promotionsOutDate: splitbyDate.outDate,
    onDatePromotionsSortedBySubscriptions,
    onDatePromotionsSortedByCompletedSubscriptions
  }
}
