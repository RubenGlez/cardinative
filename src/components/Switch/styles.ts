import { Switch } from 'react-native'
import styled from 'styled-components/native'
import { SwitchProps } from './types'

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const SwitchLabel = styled.View``
export const SwitchInput = styled.View``
export const StyledSwitch = styled(Switch).attrs<SwitchProps>(({ theme }) => ({
  trackColor: { false: theme.color.bg_3, true: theme.color.util_success },
  thumbColor: theme.color.bg_1,
  ios_backgroundColor: theme.color.bg_3
}))``
