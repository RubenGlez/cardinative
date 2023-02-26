import { User } from '@/entities'
import { Preferences } from '@/entities/Preferences'
import apiClient from '../../apiClient'

export type UpdatePreferencesInputData = Pick<
  Preferences,
  'id' | 'user' | 'companySelected' | 'themeSelected' | 'languageSelected'
>

export function updatePreferencesRequest(
  inputData: UpdatePreferencesInputData
) {
  return apiClient.put<UpdatePreferencesInputData, Preferences>(
    `/common/preferences/${inputData.id}`,
    inputData
  )
}

export async function getPreferencesRequest(userId: User['id']) {
  const { data } = await apiClient.get<Preferences>(
    `/common/preferences/?userId=${userId}`
  )
  return data
}
