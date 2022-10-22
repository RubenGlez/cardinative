import { Promotion } from '@/entities/Promotion'
import { getPromotionRequest } from '@/lib/api/requests/business/promotion'
import { useQuery } from '@/lib/queryClient'

export default function useGetPromotion(
  promotionId: Promotion['id'] | undefined
) {
  return useQuery(
    ['promotions', promotionId],
    () => getPromotionRequest(promotionId ?? ''),
    {
      enabled: !!promotionId
    }
  )
}
