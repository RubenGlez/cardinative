import { Promotion } from '@/entities'
import {
  UpdatePromotionInputData,
  updatePromotionRequest
} from '@/lib/api/requests/promotion'
import { useMutation, useQueryClient } from 'react-query'

export interface UseUpdatePromotionProps {
  handleSuccess?: (
    data: Promotion,
    variables: UpdatePromotionInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: UpdatePromotionInputData,
    context: unknown
  ) => void
}

export default function useUpdatePromotion({
  handleSuccess,
  handleError
}: UseUpdatePromotionProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: UpdatePromotionInputData) => updatePromotionRequest(inputData),
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