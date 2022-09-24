import useAuthSession from './useAuthSession'

export default function useIsSignedIn() {
  const [session] = useAuthSession()
  const { accessToken, userId } = session
  const isSignedIn = !!accessToken && !!userId

  return isSignedIn
}
