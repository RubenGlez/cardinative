import useDeviceStorage from '../useDeviceStorage'

export interface AuthSession {
  userId: string
  accessToken: string
}

export default function useAuthSession() {
  const [session, setSession] = useDeviceStorage('session')

  const authSession: AuthSession =
    typeof session === 'string' ? JSON.parse(session) : {}

  const setAuthSession = (sessionData: AuthSession) => {
    setSession(JSON.stringify(sessionData))
  }

  return [authSession, setAuthSession] as const
}
