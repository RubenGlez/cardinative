import { Card } from '@/entities'
import { deleteCardRequest } from '@/lib/api/requests/card'
import { AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

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
      queryClient.invalidateQueries(['cards'])
      handleSuccess?.(data, variables, context)
    },
    onError: (error, variables, context) => {
      handleError?.(error, variables, context)
    }
  })
}
