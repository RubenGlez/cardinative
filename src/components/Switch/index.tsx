import React from 'react'
import { SwitchProps } from './types'
import Typography from '../Typography'
import {
  StyledSwitch,
  SwitchContainer,
  SwitchInput,
  SwitchLabel
} from './styles'

export default function Switch({ label, ...nativeProps }: SwitchProps) {
  return (
    <SwitchContainer>
      <SwitchLabel>
        <Typography size="l" color="primary">
          {label}
        </Typography>
      </SwitchLabel>
      <SwitchInput>
        <StyledSwitch {...nativeProps} />
      </SwitchInput>
    </SwitchContainer>
  )
}
