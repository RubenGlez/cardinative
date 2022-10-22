import { Company } from '@/entities/Company'
import { getCompanyRequest } from '@/lib/api/requests/business/company'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetCompany(companyId: Company['id'] | undefined) {
  return useQuery(
    [QueryKeys.Companies, companyId],
    () => getCompanyRequest(companyId ?? ''),
    {
      enabled: !!companyId
    }
  )
}
