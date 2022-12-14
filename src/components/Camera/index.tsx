import React from 'react'
import {
  useCameraDevices,
  Camera as RNCamera
} from 'react-native-vision-camera'
import Loading from '../Loading'

export default function Camera() {
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) return <Loading />

  return <RNCamera device={device} isActive={true} />
}
