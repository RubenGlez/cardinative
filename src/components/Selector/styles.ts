import styled from 'styled-components/native'

export const SelectorContainer = styled.TouchableOpacity``

export const SelectorContainerInner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.radius.m};
  border-width: ${({ theme }) => theme.space.xs};
  border-color: ${({ theme }) => theme.color.bg_4};
  padding: 0 ${({ theme }) => theme.space.sm};
`

export const OptionContainer = styled.TouchableOpacity`
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
