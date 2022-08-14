import { clearDeviceStorage } from '@/lib/deviceStorage'
import { AUTH_STACK, SIGNIN_SCREEN } from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

export default function useSignOut() {
  const { navigate } = useNavigation<RootNavigation>()
  const handleSignOut = useCallback(() => {
    clearDeviceStorage()
    navigate(AUTH_STACK, {
      screen: SIGNIN_SCREEN
    })
  }, [navigate])

  return {
    handleSignOut
  }
}
