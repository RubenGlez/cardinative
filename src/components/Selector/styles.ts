import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'
import styled from 'styled-components/native'

const Touchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

export const SelectorContainer = styled(Touchable)``

export const SelectorContainerInner = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.radius.m};
  border-width: ${({ theme }) => theme.space.xs};
  border-color: ${({ theme }) => theme.color.bg_4};
  padding: 0 ${({ theme }) => theme.space.sm};
`

export const OptionContainer = styled(Touchable)`
  height: ${({ theme }) => theme.space.xl};
  padding: 0 ${({ theme }) => theme.space.m};
`
export const OptionInner = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.bg_3};
`
