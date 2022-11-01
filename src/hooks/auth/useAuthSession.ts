import { UserRole } from '@/entities'
import useDeviceStorage from '../useDeviceStorage'

export interface AuthSession {
  userId: string
  accessToken: string
  userRole: UserRole
}

export default function useAuthSession() {
  const [session, setSession] = useDeviceStorage('session')

  const authSession: AuthSession =
    !!session && typeof session === 'string' ? JSON.parse(session) : {}

  const setAuthSession = (sessionData: AuthSession) => {
    setSession(JSON.stringify(sessionData))
  }

  return [authSession, setAuthSession] as const
}
