import { clearDeviceStorage } from '@/lib/deviceStorage'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

export default function useSignOut() {
  const { navigate } = useNavigation<RootNavigation>()
  const handleSignOut = useCallback(() => {
    clearDeviceStorage()
    navigate('AuthStack', {
      screen: 'SigninScreen'
    })
  }, [navigate])

  return {
    handleSignOut
  }
}
