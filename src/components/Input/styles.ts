import styled from 'styled-components/native'
import { StyledInputProps } from './types'

export const StyledInput = styled.TextInput.attrs<StyledInputProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.color.text_inactive,
    autoCapitalize: 'none',
    autoCompleteType: 'off',
    autoCorrect: false
  })
)<StyledInputProps>`
  border-width: ${({ theme }) => theme.space.xs};
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.color.bg_5 : theme.color.bg_4};
  border-radius: ${({ theme }) => theme.radius.m};
  background-color: ${({ theme }) => theme.color.bg_1};
  font-size: ${({ theme, size }) =>
    size === 'small' ? theme.fontSize.m : theme.fontSize.l};
  height: ${({ theme, size }) =>
    size === 'small' ? theme.space.l : theme.space.xl};
  padding: 0 ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.color.text_primary};
`
