import { getPromotionsRequest } from '@/lib/api/requests/business/promotion'
import { useQuery } from '@/lib/queryClient'

export default function useGetPromotions() {
  return useQuery(['promotions'], () => getPromotionsRequest())
}
