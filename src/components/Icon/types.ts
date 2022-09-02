import { GestureResponderEvent } from 'react-native'

export interface IconProps {
  name: string
  size?: 's' | 'm' | 'l' | 'xl'
  color?: string
  onPress?: (event: GestureResponderEvent) => void
}
