import { Subscription } from '@/entities'
import { getSubscriptionsRequest } from '@/lib/api/requests/business/subscription'
import { useQuery } from '@/lib/queryClient'

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
