import { Subscription } from '@/entities/Subscription'
import apiClient from '../../apiClient'

export type CreateSubscriptionInputData = Pick<
  Subscription,
  'subscriptor' | 'promotion'
>
export type UpdateSubscriptionInputData = Pick<Subscription, 'id'>

export function createSubscriptionRequest(
  inputData: CreateSubscriptionInputData
) {
  return apiClient.post<CreateSubscriptionInputData, Subscription>(
    '/business/subscriptions',
    inputData
  )
}

export function updateSubscriptionRequest(
  inputData: UpdateSubscriptionInputData
) {
  return apiClient.put<UpdateSubscriptionInputData, Subscription>(
    `/business/subscriptions/${inputData.id}`,
    inputData
  )
}

export async function getSubscriptionsRequest(
  companyId: Subscription['company']
) {
  const { data } = await apiClient.get<Subscription[]>(
    `/business/subscriptions/?companyId=${companyId}`
  )
  return data
}
