import { getCardsRequest } from '@/lib/api/requests/card'
import { useQuery } from 'react-query'

export default function useGetCards() {
  return useQuery(['cards'], () => getCardsRequest())
}
