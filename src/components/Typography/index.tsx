import React from 'react'
import { StyledText } from './styles'
import { TypographyProps } from './types'

export default function Typography({
  children,
  size,
  color,
  align,
  ...nativeProps
}: TypographyProps) {
  return (
    <StyledText {...nativeProps} color={color} size={size} align={align}>
      {children}
    </StyledText>
  )
}
