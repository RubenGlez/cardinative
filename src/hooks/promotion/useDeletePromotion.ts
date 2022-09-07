import { Promotion } from '@/entities'
import { deletePromotionRequest } from '@/lib/api/requests/promotion'
import { AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

export interface UseDeletePromotionProps {
  handleSuccess?: (
    data: AxiosResponse<Promotion, any>,
    variables: Promotion['id'],
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: Promotion['id'],
    context: unknown
  ) => void
}

export default function useDeletePromotion({
  handleSuccess,
  handleError
}: UseDeletePromotionProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (promotionId: Promotion['id']) => deletePromotionRequest(promotionId),
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
