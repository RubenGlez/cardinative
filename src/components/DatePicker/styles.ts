import styled from 'styled-components/native'

export const DatePickerContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.radius.m};
  border-width: ${({ theme }) => theme.space.xs};
  border-color: ${({ theme }) => theme.color.bg_4};
  padding: 0 ${({ theme }) => theme.space.sm};
`
