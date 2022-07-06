import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import lightTheme from './light'

export function ThemeManagerProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}
