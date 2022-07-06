import styled from 'styled-components/native'
import { SpacerProps } from './types'

export const StyledView = styled.View<SpacerProps>`
  height: ${({ theme, vertical }) =>
    vertical ? theme.space[vertical] : '0px'};
  width: ${({ theme, horizontal }) =>
    horizontal ? theme.space[horizontal] : '0px'};
`
