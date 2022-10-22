import { Company } from '@/entities/Company'
import {
  UpdateCompanyInputData,
  updateCompanyRequest
} from '@/lib/api/requests/business/company'
import { useMutation, useQueryClient } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export interface UseUpdateCompanyProps {
  handleSuccess?: (
    data: Company,
    variables: UpdateCompanyInputData,
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: UpdateCompanyInputData,
    context: unknown
  ) => void
}

export default function useUpdateCompany({
  handleSuccess,
  handleError
}: UseUpdateCompanyProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (inputData: UpdateCompanyInputData) => updateCompanyRequest(inputData),
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
