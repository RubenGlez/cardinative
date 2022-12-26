import React from 'react'
import Typography from '../Typography'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

export default function Button({
  text,
  size = 'xl',
  type = 'primary',
  isDisabled = false,
  isFullWidth = false,
  onPress
}: ButtonProps) {
  return (
    <StyledButton
      size={size}
      type={type}
      isFullWidth={isFullWidth}
      onPress={onPress}
      disabled={isDisabled}>
      <Typography align="center" size="l" color="alt">
        {text}
      </Typography>
    </StyledButton>
  )
}
