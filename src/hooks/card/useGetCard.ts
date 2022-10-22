import { Card } from '@/entities/Card'
import { getCardRequest } from '@/lib/api/requests/business/card'
import { useQuery } from '@/lib/queryClient'

export default function useGetCard(cardId: Card['id'] | undefined) {
  return useQuery(['cards', cardId], () => getCardRequest(cardId ?? ''), {
    enabled: !!cardId
  })
}
