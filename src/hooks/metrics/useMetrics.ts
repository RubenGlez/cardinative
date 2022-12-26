import { Promotion, Subscription, SubscriptionStatus } from '@/entities'
import useGetCurrentCompany from '../company/useGetCurrentCompany'
import useGetPromotions from '../promotion/useGetPromotions'
import useGetSubscriptions from '../subscription/useGetSubscriptions'

export default function useMetrics() {
  const today = new Date()
  const currentCompany = useGetCurrentCompany()
  const { data: promotions = [] } = useGetPromotions(currentCompany?.id ?? '')
  const { data: subscriptions = [] } = useGetSubscriptions(
    currentCompany?.id ?? ''
  )

  const splitbyDate = promotions.reduce(
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

  const subsGroupedByPromotionId = subscriptions.reduce(
    (acc: Record<Subscription['promotion'], Subscription[]>, curr) => {
      if (acc[curr.promotion]) {
        acc[curr.promotion].push(curr)
      } else {
        acc[curr.promotion] = [curr]
      }
      return acc
    },
    {}
  )

  const promotionIdsSortedBySubsNumber = Object.keys(
    subsGroupedByPromotionId
  ).sort((a, b) => {
    return (
      subsGroupedByPromotionId[a].length - subsGroupedByPromotionId[b].length
    )
  })

  const onDatePromotionsSortedBySubscriptions =
    promotionIdsSortedBySubsNumber.map(promotionId =>
      promotions.find(promotion => promotion.id === promotionId)
    )

  const completedSubsGroupedByPromotionId = subscriptions.reduce(
    (acc: Record<Subscription['promotion'], Subscription[]>, curr) => {
      if (curr.status !== SubscriptionStatus.completed) return acc

      if (acc[curr.promotion]) {
        acc[curr.promotion].push(curr)
      } else {
        acc[curr.promotion] = [curr]
      }
      return acc
    },
    {}
  )

  const promotionIdsSortedByCompletedSubsNumber = Object.keys(
    completedSubsGroupedByPromotionId
  ).sort((a, b) => {
    return (
      subsGroupedByPromotionId[a].length - subsGroupedByPromotionId[b].length
    )
  })

  const onDatePromotionsSortedByCompletedSubscriptions =
    promotionIdsSortedByCompletedSubsNumber.map(promotionId =>
      promotions.find(promotion => promotion.id === promotionId)
    )

  const subscriptionsCounterByPromotionId = subscriptions.reduce(
    (acc: Record<Subscription['promotion'], number>, curr) => {
      if (acc[curr.promotion]) {
        acc[curr.promotion] = acc[curr.promotion] + 1
      } else {
        acc[curr.promotion] = 1
      }
      return acc
    },
    {}
  )

  return {
    promotionsOutDate: splitbyDate.outDate,
    onDatePromotionsSortedBySubscriptions,
    onDatePromotionsSortedByCompletedSubscriptions,
    subscriptionsCounterByPromotionId
  }
}
