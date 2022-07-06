import React from 'react'
import { StyledView } from './styles'
import { SpacerProps } from './types'

export default function Spacer({ vertical, horizontal }: SpacerProps) {
  return <StyledView vertical={vertical} horizontal={horizontal} />
}
