import { Subscription, SubscriptionStatus } from '@/entities'
import { useMemo } from 'react'
import useGetSubscriptions from './useGetSubscriptions'

interface SubscriptionsByStatus {
  activedSubs: Subscription[]
  activedSubsCounter: number
  inactivedSubs: Subscription[]
  inactivedSubsCounter: number
  completedSubs: Subscription[]
  completedSubsCounter: number
  totalCounter: number
}

const INITIAL_VALUES = {
  activedSubs: [],
  activedSubsCounter: 0,
  inactivedSubs: [],
  inactivedSubsCounter: 0,
  completedSubs: [],
  completedSubsCounter: 0,
  totalCounter: 0
}

export default function useGetSubscriptionsByStatus(
  promotionId: Subscription['promotion']
) {
  const { data: subscriptions } = useGetSubscriptions(promotionId)

  const subscriptionsByStatus = useMemo(() => {
    if (!subscriptions?.length) return INITIAL_VALUES
    return subscriptions?.reduce((total: SubscriptionsByStatus, current) => {
      if (current.status === SubscriptionStatus.active) {
        total.activedSubs.push(current)
        ++total.activedSubsCounter
      } else if (current.status === SubscriptionStatus.inactive) {
        total.inactivedSubs.push(current)
        ++total.inactivedSubsCounter
      } else {
        total.completedSubs.push(current)
        ++total.completedSubsCounter
      }
      ++total.totalCounter

      return total
    }, INITIAL_VALUES)
  }, [subscriptions])

  return subscriptionsByStatus
}
