import { getPromotionsRequest } from '@/lib/api/requests/business/promotion'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetPromotions() {
  return useQuery([QueryKeys.Promotions], () => getPromotionsRequest())
}
