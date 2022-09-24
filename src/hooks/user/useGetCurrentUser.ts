import useAuthSession from '../auth/useAuthSession'
import useGetUserById from './useGetUserById'

export default function useGetCurrentUser() {
  const [authSession] = useAuthSession()
  const { data: userData } = useGetUserById(authSession.userId)

  return userData
}
