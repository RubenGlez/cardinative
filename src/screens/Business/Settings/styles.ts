import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'
import styled from 'styled-components/native'

const Touchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

export const SettingsHeader = styled.View`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.bg_4};
  padding-bottom: ${({ theme }) => theme.space.xl};
`

export const SettingsContent = styled.View``

export const SettingsItemContainer = styled(Touchable)`
  height: ${({ theme }) => theme.space.xl};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.bg_4};
`
export const SettingsItemInner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
