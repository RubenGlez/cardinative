import { ReactNode } from 'react'

export interface ScreenLayoutProps {
  handleClose?: () => void
  showBackButton?: boolean
  footer?: ReactNode
  title: string
  children: ReactNode
}
