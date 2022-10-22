import { Company } from '@/entities/Company'
import { getCompanyRequest } from '@/lib/api/requests/business/company'
import { useQuery } from '@/lib/queryClient'

export default function useGetCompany(companyId: Company['id'] | undefined) {
  return useQuery(
    ['companies', companyId],
    () => getCompanyRequest(companyId ?? ''),
    {
      enabled: !!companyId
    }
  )
}
