import React from 'react'
import { IconProps } from './types'
import VectorIcon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/hooks/useTheme'

const SIZES = {
  s: 16,
  m: 24,
  l: 32,
  xl: 64
}

// https://ionic.io/ionicons

export default function Icon({
  name = 'square-outline',
  size = 'm',
  color,
  onPress
}: IconProps) {
  const theme = useTheme()
  const defaultColor = theme.color.text_primary

  return (
    <VectorIcon
      name={name}
      size={SIZES[size]}
      color={color ?? defaultColor}
      onPress={onPress}
    />
  )
}
