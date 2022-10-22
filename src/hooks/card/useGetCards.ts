import { getCardsRequest } from '@/lib/api/requests/business/card'
import { useQuery } from '@/lib/queryClient'

export default function useGetCards() {
  return useQuery(['cards'], () => getCardsRequest())
}
