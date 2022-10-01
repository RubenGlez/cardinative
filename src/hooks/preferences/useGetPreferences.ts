import { getPreferencesRequest } from '@/lib/api/requests/preferences'
import { useQuery } from 'react-query'
import useGetCurrentUser from '../user/useGetCurrentUser'

export default function useGetPreferences() {
  const currentUser = useGetCurrentUser()
  const userId = currentUser?.id

  return useQuery(['preferences'], () => getPreferencesRequest(userId), {
    enabled: !!userId
  })
}
