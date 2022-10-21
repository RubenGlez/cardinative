import { Promotion } from '@/entities/Promotion'
import { getPromotionRequest } from '@/lib/api/requests/promotion'
import { useQuery } from 'react-query'

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
