import { Company, Metrics } from '@/entities'
import apiClient from '../../apiClient'

export async function getMetricsRequest(companyId: Company['id']) {
  const { data } = await apiClient.get<Metrics>(
    `/business/metrics/?companyId=${companyId}`
  )
  return data
}
