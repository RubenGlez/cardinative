import { Card } from '@/entities'
import {
  CreateCardInputData,
  createCardRequest
} from '@/lib/api/requests/business/card'
import { useMutation, useQueryClient } from '@/lib/queryClient'

export interface UseCreateCardProps {
  handleSuccess?: (
    data: Card,
    variables: CreateCardInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: CreateCardInputData,
    context: unknown
  ) => void
}

export default function useCreateCard({
  handleSuccess,
  handleError
}: UseCreateCardProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: CreateCardInputData) => createCardRequest(inputData),
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
