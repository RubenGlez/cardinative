import { Card } from '@/entities/Card'
import { getCardRequest } from '@/lib/api/requests/card'
import { useQuery } from 'react-query'

export default function useGetCard(cardId: Card['id'] | undefined) {
  return useQuery(['cards', cardId], () => getCardRequest(cardId ?? ''), {
    enabled: !!cardId
  })
}
