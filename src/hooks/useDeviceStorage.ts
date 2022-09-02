import deviceStorage from '@/lib/deviceStorage'
import { useMMKVStorage } from 'react-native-mmkv-storage'

export default function useDeviceStorage(
  key: string,
  initialValue?: string | number
) {
  return useMMKVStorage(key, deviceStorage, initialValue)
}
