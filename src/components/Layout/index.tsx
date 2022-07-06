import React from 'react'
import {
  StyledSafeAreaView,
  StyledKeyboardAvoidingView,
  StyledTouchableWithoutFeedback
} from './styles'
import { LayoutProps } from './types'

export default function Layout({
  children,
  enableKeyboardAvoidingView = true,
  enableHideKeyboardOnPress = true
}: LayoutProps) {
  return (
    <StyledSafeAreaView>
      {enableKeyboardAvoidingView && enableHideKeyboardOnPress && (
        <StyledKeyboardAvoidingView>
          <StyledTouchableWithoutFeedback>
            {children}
          </StyledTouchableWithoutFeedback>
        </StyledKeyboardAvoidingView>
      )}
      {enableKeyboardAvoidingView && !enableHideKeyboardOnPress && (
        <StyledKeyboardAvoidingView>{children}</StyledKeyboardAvoidingView>
      )}
      {!enableKeyboardAvoidingView && enableHideKeyboardOnPress && (
        <StyledTouchableWithoutFeedback>
          {children}
        </StyledTouchableWithoutFeedback>
      )}
      {!enableKeyboardAvoidingView && !enableHideKeyboardOnPress && (
        <>{children}</>
      )}
    </StyledSafeAreaView>
  )
}
