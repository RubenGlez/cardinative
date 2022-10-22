import { getCardsRequest } from '@/lib/api/requests/business/card'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetCards() {
  return useQuery([QueryKeys.Cards], () => getCardsRequest())
}
