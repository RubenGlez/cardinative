import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps
} from 'react-native'

export interface InputProps extends TextInputProps {
  size?: 'small' | 'big'
}

export type FocusEvent = NativeSyntheticEvent<TextInputFocusEventData>

export interface StyledInputProps {
  size: InputProps['size']
  isFocused: boolean
}
