import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
  enableKeyboardAvoidingView?: boolean
  enableHideKeyboardOnPress?: boolean
}
