import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
  type: 'main' | 'form' | 'screen'
}
