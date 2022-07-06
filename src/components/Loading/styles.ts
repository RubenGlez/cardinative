import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.bg_1};
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`

export const LoadingIcon = styled(Animated.View)`
  width: ${({ theme }) => theme.space.xl};
  height: ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.space.xl};
  border: 4px solid ${({ theme }) => theme.color.bg_5};
  border-top-color: transparent;
  border-bottom-color: transparent;
`
