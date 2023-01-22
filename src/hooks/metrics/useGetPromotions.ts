import { Company } from '@/entities'
import { getMetricsRequest } from '@/lib/api/requests/business/metrics'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetMetrics(companyId: Company['id'] | undefined) {
  return useQuery(
    [QueryKeys.Preferences],
    () => getMetricsRequest(companyId ?? ''),
    {
      enabled: !!companyId
    }
  )
}
