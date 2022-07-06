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
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      onPress={onPress}>
      <Typography align="center" size="l" color="alt">
        {text}
      </Typography>
    </StyledButton>
  )
}
