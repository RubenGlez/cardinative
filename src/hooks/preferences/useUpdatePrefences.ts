import { Preferences } from '@/entities/Preferences'
import {
  UpdatePreferencesInputData,
  updatePreferencesRequest
} from '@/lib/api/requests/business/preferences'
import { useMutation, useQueryClient } from '@/lib/queryClient'

export interface UseUpdatePreferencesProps {
  handleSuccess?: (
    data: Preferences,
    variables: UpdatePreferencesInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: UpdatePreferencesInputData,
    context: unknown
  ) => void
}

export default function useUpdatePreferences({
  handleSuccess,
  handleError
}: UseUpdatePreferencesProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: UpdatePreferencesInputData) =>
      updatePreferencesRequest(inputData),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(['preferences'])
        handleSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        handleError?.(error, variables, context)
      }
    }
  )
}
