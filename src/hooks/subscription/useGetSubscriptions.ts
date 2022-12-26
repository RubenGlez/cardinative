import { Subscription } from '@/entities'
import { getSubscriptionsRequest } from '@/lib/api/requests/business/subscription'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetSubscriptions(
  companyId: Subscription['company']
) {
  return useQuery(
    [QueryKeys.Subscriptions, companyId],
    () => getSubscriptionsRequest(companyId),
    {
      enabled: !!companyId
    }
  )
}
