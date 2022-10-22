import { Card } from '@/entities/Card'
import { getCardRequest } from '@/lib/api/requests/business/card'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetCard(cardId: Card['id'] | undefined) {
  return useQuery(
    [QueryKeys.Cards, cardId],
    () => getCardRequest(cardId ?? ''),
    {
      enabled: !!cardId
    }
  )
}
