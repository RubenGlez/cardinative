import { getCompaniesRequest } from '@/lib/api/requests/company'
import { useQuery } from 'react-query'

export default function useGetCompanies() {
  return useQuery(['companies'], () => getCompaniesRequest())
}
