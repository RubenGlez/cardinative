import { Card } from '@/entities'
import apiClient from '../../apiClient'

export type CreateCardInputData = Omit<Card, 'id' | 'owner'>
export type UpdateCardInputData = Omit<Card, 'owner' | 'company'>

export function createCardRequest(inputData: CreateCardInputData) {
  return apiClient.post<CreateCardInputData, Card>('/business/cards', inputData)
}

export async function getCardsRequest() {
  const { data } = await apiClient.get<Card[]>('/business/cards')
  return data
}

export function updateCardRequest(inputData: UpdateCardInputData) {
  return apiClient.put<UpdateCardInputData, Card>(
    `/business/cards/${inputData.id}`,
    inputData
  )
}

export async function getCardRequest(cardId: Card['id']) {
  const { data } = await apiClient.get<Card>(`/business/cards/${cardId}`)
  return data
}

export function deleteCardRequest(cardId: Card['id']) {
  return apiClient.delete<Card>(`/business/cards/${cardId}`)
}
