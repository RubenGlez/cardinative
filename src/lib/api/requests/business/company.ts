import { Company } from '@/entities/Company'
import apiClient from '../../apiClient'

export type CreateCompanyInputData = Pick<
  Company,
  'name' | 'description' | 'contact'
>
export type UpdateCompanyInputData = Pick<
  Company,
  'id' | 'name' | 'description' | 'contact'
>

export function createCompanyRequest(inputData: CreateCompanyInputData) {
  return apiClient.post<CreateCompanyInputData, Company>(
    '/business/companies',
    inputData
  )
}

export function updateCompanyRequest(inputData: UpdateCompanyInputData) {
  return apiClient.put<UpdateCompanyInputData, Company>(
    `/business/companies/${inputData.id}`,
    inputData
  )
}

export async function getCompaniesRequest() {
  const { data } = await apiClient.get<Company[]>('/business/companies')
  return data
}

export async function getCompanyRequest(companyId: Company['id']) {
  const { data } = await apiClient.get<Company>(
    `/business/companies/${companyId}`
  )
  return data
}

export function deleteCompanyRequest(companyId: Company['id']) {
  return apiClient.delete<Company>(`/business/companies/${companyId}`)
}
