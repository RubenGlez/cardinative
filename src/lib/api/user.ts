import { User } from '@/entities'
import apiClient from '../apiClient'

export async function getUserByIdRequest(id: User['id']) {
  const { data } = await apiClient.get<User>(`/users/${id}`)
  return data
}
