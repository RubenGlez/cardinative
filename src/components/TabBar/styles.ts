import styled from 'styled-components/native'

export const TabBarContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.bg_1};
  align-items: center;
  height: 56px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.color.bg_4};
`

export const TabBarItem = styled.TouchableOpacity`
  flex: 1;
`
