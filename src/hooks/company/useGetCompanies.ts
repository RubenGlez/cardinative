import { getCompaniesRequest } from '@/lib/api/requests/business/company'
import { useQuery } from '@/lib/queryClient'

export default function useGetCompanies() {
  return useQuery(['companies'], () => getCompaniesRequest())
}
