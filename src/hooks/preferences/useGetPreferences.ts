import { getPreferencesRequest } from '@/lib/api/requests/business/preferences'
import { useQuery } from '@/lib/queryClient'
import useGetCurrentUser from '../user/useGetCurrentUser'

export default function useGetPreferences() {
  const currentUser = useGetCurrentUser()
  const userId = currentUser?.id

  return useQuery(['preferences'], () => getPreferencesRequest(userId), {
    enabled: !!userId
  })
}
