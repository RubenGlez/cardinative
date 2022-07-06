import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'
import styled from 'styled-components/native'
import { StyledButtonProps } from './types'

const Touchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

export const StyledButton = styled(Touchable)<StyledButtonProps>`
  height: ${({ theme, size }) => theme.space[size!]};
  background-color: ${({ theme, type }) => {
    if (type === 'primary') {
      return theme.color.cta_primary
    } else if (type === 'secondary') {
      return theme.color.cta_secondary
    } else if (type === 'success') {
      return theme.color.util_success
    } else if (type === 'danger') {
      return theme.color.util_danger
    }
  }};
  border-radius: ${({ theme }) => theme.radius.m};
  justify-content: center;
  padding: 0 ${({ theme }) => theme.space.m};
  ${({ isFullWidth }) => isFullWidth && `align-self: flex-start;`}
`
