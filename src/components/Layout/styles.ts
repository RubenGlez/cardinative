import { Keyboard, Platform } from 'react-native'
import styled from 'styled-components/native'

export const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.color.bg_1};
  flex: 1;
`

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView.attrs(
  () => ({
    behavior: Platform.OS === 'ios' ? 'padding' : 'height'
  })
)`
  flex: 1;
`

export const StyledTouchableWithoutFeedback = styled.TouchableWithoutFeedback.attrs(
  () => ({
    onPress: Keyboard.dismiss,
    accessible: false
  })
)`
  flex: 1;
`

export const ScreenTypeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg_1};
`
