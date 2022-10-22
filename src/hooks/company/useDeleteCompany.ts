import { Company } from '@/entities'
import { deleteCompanyRequest } from '@/lib/api/requests/business/company'
import { AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export interface UseDeleteCompanyProps {
  handleSuccess?: (
    data: AxiosResponse<Company, any>,
    variables: Company['id'],
    context: unknown
  ) => void
  handleError?: (
    error: unknown,
    variables: Company['id'],
    context: unknown
  ) => void
}

export default function useDeleteCompany({
  handleSuccess,
  handleError
}: UseDeleteCompanyProps) {
  const queryClient = useQueryClient()

  return useMutation(
    (companyId: Company['id']) => deleteCompanyRequest(companyId),
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
