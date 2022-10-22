import { getCompaniesRequest } from '@/lib/api/requests/business/company'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetCompanies() {
  return useQuery([QueryKeys.Companies], () => getCompaniesRequest())
}
