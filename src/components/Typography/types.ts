import { ReactNode } from 'react'
import { TextProps } from 'react-native'

export interface TypographyProps extends TextProps {
  children: ReactNode
  size?: 's' | 'm' | 'l' | 'xl'
  color?: 'primary' | 'secondary' | 'active' | 'inactive' | 'alt'
  align?: 'left' | 'center' | 'right'
}
