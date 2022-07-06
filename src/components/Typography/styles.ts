import styled from 'styled-components/native'
import { TypographyProps } from './types'

export const StyledText = styled.Text<TypographyProps>`
  font-size: ${({ theme, size }) => theme.fontSize[size ?? 'm']};
  line-height: ${({ theme, size }) => theme.lineHeight[size ?? 'm']};
  color: ${({ theme, color }) => theme.color[`text_${color ?? 'primary'}`]};
  text-align: ${({ align }) => align ?? 'left'};
`
