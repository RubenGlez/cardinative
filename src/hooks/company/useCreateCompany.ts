import { Company } from '@/entities'
import {
  CreateCompanyInputData,
  createCompanyRequest
} from '@/lib/api/requests/business/company'
import { useMutation, useQueryClient } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export interface UseCreateCompanyProps {
  handleSuccess?: (
    data: Company,
    variables: CreateCompanyInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: CreateCompanyInputData,
    context: unknown
  ) => void
}

export default function useCreateCompany({
  handleSuccess,
  handleError
}: UseCreateCompanyProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: CreateCompanyInputData) => createCompanyRequest(inputData),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries([QueryKeys.Companies])
        handleSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        handleError?.(error, variables, context)
      }
    }
  )
}
