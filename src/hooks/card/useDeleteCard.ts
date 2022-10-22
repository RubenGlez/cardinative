import { Card } from '@/entities'
import { deleteCardRequest } from '@/lib/api/requests/business/card'
import { AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export interface UseDeleteCardProps {
  handleSuccess?: (
    data: AxiosResponse<Card, any>,
    variables: Card['id'],
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: Card['id'],
    context: unknown
  ) => void
}

export default function useDeleteCard({
  handleSuccess,
  handleError
}: UseDeleteCardProps) {
  const queryClient = useQueryClient()

  return useMutation((cardId: Card['id']) => deleteCardRequest(cardId), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries([QueryKeys.Cards])
      handleSuccess?.(data, variables, context)
    },
    onError: (error, variables, context) => {
      handleError?.(error, variables, context)
    }
  })
}
