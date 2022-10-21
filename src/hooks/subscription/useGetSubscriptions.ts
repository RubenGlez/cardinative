import { Subscription } from '@/entities'
import { getSubscriptionsRequest } from '@/lib/api/requests/subscription'
import { useQuery } from 'react-query'

export default function useGetSubscriptions(
  promotionId: Subscription['promotion']
) {
  return useQuery(
    ['subscriptions', promotionId],
    () => getSubscriptionsRequest(promotionId),
    {
      enabled: !!promotionId
    }
  )
}
