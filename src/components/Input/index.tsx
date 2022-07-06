import React, { useCallback, useState } from 'react'
import { StyledInput } from './styles'
import { InputProps, FocusEvent } from './types'

export default function Input({ size = 'big', ...nativeProps }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const onFocus = useCallback(
    (event: FocusEvent) => {
      setIsFocused(true)
      nativeProps.onFocus?.(event)
    },
    [nativeProps]
  )
  const onBlur = useCallback(
    (event: FocusEvent) => {
      setIsFocused(false)
      nativeProps.onBlur?.(event)
    },
    [nativeProps]
  )

  return (
    <StyledInput
      {...nativeProps}
      size={size}
      onFocus={onFocus}
      onBlur={onBlur}
      isFocused={isFocused}
    />
  )
}
