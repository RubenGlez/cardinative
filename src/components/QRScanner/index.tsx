import { useIsFocused } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'

import { StyleSheet } from 'react-native'
import { runOnJS } from 'react-native-reanimated'
import {
  useCameraDevices,
  Camera,
  useFrameProcessor
} from 'react-native-vision-camera'
import {
  BarcodeFormat,
  scanBarcodes,
  Barcode
} from 'vision-camera-code-scanner'
import Loading from '../Loading'

interface QRScannerProps {
  onReadQR: (code: string) => void
}

export default function QRScanner({ onReadQR }: QRScannerProps) {
  const isFocused = useIsFocused()
  const [hasPermission, setHasPermission] = useState(false)
  const devices = useCameraDevices()
  const device = devices.back
  const [QRcodes, setQRCodes] = useState<Barcode[]>([])
  const frameProcessor = useFrameProcessor(frame => {
    'worklet'
    const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE])
    runOnJS(setQRCodes)(detectedBarcodes)
  }, [])
  const checkPermissions = async () => {
    let status = await Camera.getCameraPermissionStatus()
    if (status === 'not-determined') {
      status = await Camera.requestCameraPermission()
    }
    setHasPermission(status === 'authorized')
  }

  useEffect(() => {
    checkPermissions()
  }, [])

  useEffect(() => {
    if (QRcodes.length > 0) {
      const firstCodeValue = QRcodes[0].displayValue
      if (firstCodeValue) {
        onReadQR(firstCodeValue)
      }
    }
  }, [QRcodes, QRcodes.length, onReadQR])

  return device && hasPermission && isFocused ? (
    <Camera
      style={styles.camera}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={5}
    />
  ) : (
    <Loading />
  )
}

const styles = StyleSheet.create({
  camera: {
    width: 256,
    height: 256,
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 2
  }
})
