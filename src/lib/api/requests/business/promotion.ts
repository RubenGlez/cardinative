import { Promotion } from '@/entities'
import apiClient from '../../apiClient'

export type CreatePromotionInputData = Omit<
  Promotion,
  'id' | 'owner' | 'validFrom' | 'validTo'
> & {
  validFrom: string
  validTo: string
}

export type UpdatePromotionInputData = Omit<
  Promotion,
  'owner' | 'company' | 'card' | 'validFrom' | 'validTo'
> & {
  validFrom: string
  validTo: string
}

export function createPromotionRequest(inputData: CreatePromotionInputData) {
  return apiClient.post<CreatePromotionInputData, Promotion>(
    '/business/promotions',
    inputData
  )
}

export async function getPromotionsRequest(companyId: Promotion['company']) {
  const { data } = await apiClient.get<Promotion[]>(
    `/business/promotions?companyId=${companyId}`
  )
  return data
}

export function updatePromotionRequest(inputData: UpdatePromotionInputData) {
  return apiClient.put<UpdatePromotionInputData, Promotion>(
    `/business/promotions/${inputData.id}`,
    inputData
  )
}

export async function getPromotionRequest(promotionId: Promotion['id']) {
  const { data } = await apiClient.get<Promotion>(
    `/business/promotions/${promotionId}`
  )
  return data
}

export function deletePromotionRequest(promotionId: Promotion['id']) {
  return apiClient.delete<Promotion>(`/business/promotions/${promotionId}`)
}
