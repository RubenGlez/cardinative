import { getPromotionsRequest } from '@/lib/api/requests/promotion'
import { useQuery } from 'react-query'

export default function useGetPromotions() {
  return useQuery(['promotions'], () => getPromotionsRequest())
}
