import { Promotion } from '@/entities'
import {
  CreatePromotionInputData,
  createPromotionRequest
} from '@/lib/api/requests/promotion'
import { useMutation, useQueryClient } from 'react-query'

export interface UseCreatePromotionProps {
  handleSuccess?: (
    data: Promotion,
    variables: CreatePromotionInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: CreatePromotionInputData,
    context: unknown
  ) => void
}

export default function useCreatePromotion({
  handleSuccess,
  handleError
}: UseCreatePromotionProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: CreatePromotionInputData) => createPromotionRequest(inputData),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(['promotions'])
        handleSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        handleError?.(error, variables, context)
      }
    }
  )
}
