import { Subscription } from '@/entities'
import { getPromotionsRequest } from '@/lib/api/requests/business/promotion'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetPromotions(companyId: Subscription['company']) {
  return useQuery(
    [QueryKeys.Promotions, companyId],
    () => getPromotionsRequest(companyId),
    {
      enabled: !!companyId
    }
  )
}
