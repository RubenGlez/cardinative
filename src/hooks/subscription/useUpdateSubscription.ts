import { Subscription } from '@/entities/Subscription'
import {
  UpdateSubscriptionInputData,
  updateSubscriptionRequest
} from '@/lib/api/requests/business/subscription'
import { useMutation, useQueryClient } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export interface UseUpdateSubscriptionProps {
  handleSuccess?: (
    data: Subscription,
    variables: UpdateSubscriptionInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: UpdateSubscriptionInputData,
    context: unknown
  ) => void
}

export default function useUpdateSubscription({
  handleSuccess,
  handleError
}: UseUpdateSubscriptionProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: UpdateSubscriptionInputData) =>
      updateSubscriptionRequest(inputData),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries([QueryKeys.Subscriptions])
        handleSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        handleError?.(error, variables, context)
      }
    }
  )
}
