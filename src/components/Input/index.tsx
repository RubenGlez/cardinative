import React, { useCallback, useState } from 'react'
import { StyledInput } from './styles'
import { InputProps, FocusEvent } from './types'

export default function Input({ size = 'big', ...nativeProps }: InputProps) {
  const [hasFocus, seHasFocus] = useState(false)
  const onFocus = useCallback(
    (event: FocusEvent) => {
      seHasFocus(true)
      nativeProps.onFocus?.(event)
    },
    [nativeProps]
  )
  const onBlur = useCallback(
    (event: FocusEvent) => {
      seHasFocus(false)
      nativeProps.onBlur?.(event)
    },
    [nativeProps]
  )

  return (
    <StyledInput
      {...nativeProps}
      onFocus={onFocus}
      onBlur={onBlur}
      size={size}
      hasFocus={hasFocus}
    />
  )
}
