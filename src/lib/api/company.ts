import { Company } from '@/entities/Company'
import apiClient from '../apiClient'

export type CreateCompanyInputData = Pick<
  Company,
  'name' | 'description' | 'contact'
>

export function createCompanyRequest(inputData: CreateCompanyInputData) {
  return apiClient.post<CreateCompanyInputData, Company>(
    '/companies',
    inputData
  )
}
