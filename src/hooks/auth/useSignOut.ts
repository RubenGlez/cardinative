import { clearDeviceStorage } from '@/lib/deviceStorage'
import { useCallback } from 'react'

export default function useSignOut() {
  const handleSignOut = useCallback(() => {
    clearDeviceStorage()
  }, [])

  return {
    handleSignOut
  }
}
