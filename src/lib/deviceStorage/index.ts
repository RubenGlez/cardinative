import { MMKVInstance, MMKVLoader } from 'react-native-mmkv-storage'

type DeviceStorageItems = 'session'

const deviceStorage: MMKVInstance = new MMKVLoader().initialize()

export const getDeviceStorageItem = (key: DeviceStorageItems) => {
  return deviceStorage.getString(key)
}

export const setDeviceStorageItem = (
  key: DeviceStorageItems,
  value: string
) => {
  deviceStorage.setString(key, value)
}

export const clearDeviceStorage = () => {
  deviceStorage.clearStore()
}

export default deviceStorage
