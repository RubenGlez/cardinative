import { Card } from '@/entities'
import apiClient from '../apiClient'

export type CreateCardInputData = Omit<Card, 'id' | 'owner'>

export function createCardRequest(inputData: CreateCardInputData) {
  return apiClient.post<CreateCardInputData, Card>('/cards', inputData)
}
