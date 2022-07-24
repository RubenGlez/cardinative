import React from 'react'
import {
  StyledSafeAreaView,
  StyledKeyboardAvoidingView,
  StyledTouchableWithoutFeedback,
  ScreenTypeContainer
} from './styles'
import { LayoutProps } from './types'

export default function Layout({ children, type }: LayoutProps) {
  if (type === 'main') {
    return <StyledSafeAreaView>{children}</StyledSafeAreaView>
  } else if (type === 'form') {
    return (
      <StyledKeyboardAvoidingView>
        <StyledTouchableWithoutFeedback>
          {children}
        </StyledTouchableWithoutFeedback>
      </StyledKeyboardAvoidingView>
    )
  } else if (type === 'screen') {
    return <ScreenTypeContainer>{children}</ScreenTypeContainer>
  }

  return <>{children}</>
}
