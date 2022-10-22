import { Card } from '@/entities'
import {
  UpdateCardInputData,
  updateCardRequest
} from '@/lib/api/requests/business/card'
import { useMutation, useQueryClient } from '@/lib/queryClient'

export interface UseUpdateCardProps {
  handleSuccess?: (
    data: Card,
    variables: UpdateCardInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: UpdateCardInputData,
    context: unknown
  ) => void
}

export default function useUpdateCard({
  handleSuccess,
  handleError
}: UseUpdateCardProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: UpdateCardInputData) => updateCardRequest(inputData),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(['cards'])
        handleSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        handleError?.(error, variables, context)
      }
    }
  )
}
