import { Company } from '@/entities'
import { deleteCompanyRequest } from '@/lib/api/requests/company'
import { AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

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
        queryClient.invalidateQueries(['companies'])
        handleSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        handleError?.(error, variables, context)
      }
    }
  )
}
