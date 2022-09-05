import { Company } from '@/entities/Company'
import { getCompanyRequest } from '@/lib/api/requests/company'
import { useQuery } from 'react-query'

export default function useGetCompany(companyId: Company['id'] | undefined) {
  return useQuery(
    ['companies', companyId],
    () => getCompanyRequest(companyId),
    {
      enabled: !!companyId
    }
  )
}
