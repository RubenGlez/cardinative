import { Subscription } from '@/entities'
import {
  CreateSubscriptionInputData,
  createSubscriptionRequest
} from '@/lib/api/requests/subscription'
import { useMutation, useQueryClient } from 'react-query'

export interface UseCreateSubscriptionProps {
  handleSuccess?: (
    data: Subscription,
    variables: CreateSubscriptionInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: CreateSubscriptionInputData,
    context: unknown
  ) => void
}

export default function useCreateSubscription({
  handleSuccess,
  handleError
}: UseCreateSubscriptionProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: CreateSubscriptionInputData) =>
      createSubscriptionRequest(inputData),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(['subscriptions'])
        handleSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        handleError?.(error, variables, context)
      }
    }
  )
}
