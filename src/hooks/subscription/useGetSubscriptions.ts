import { Subscription } from '@/entities'
import { getSubscriptionsRequest } from '@/lib/api/requests/business/subscription'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetSubscriptions(
  promotionId: Subscription['promotion']
) {
  return useQuery(
    [QueryKeys.Subscriptions, promotionId],
    () => getSubscriptionsRequest(promotionId),
    {
      enabled: !!promotionId
    }
  )
}
