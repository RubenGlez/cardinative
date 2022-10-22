import { Promotion } from '@/entities/Promotion'
import { getPromotionRequest } from '@/lib/api/requests/business/promotion'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetPromotion(
  promotionId: Promotion['id'] | undefined
) {
  return useQuery(
    [QueryKeys.Promotions, promotionId],
    () => getPromotionRequest(promotionId ?? ''),
    {
      enabled: !!promotionId
    }
  )
}
