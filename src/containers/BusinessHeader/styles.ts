import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.color.bg_1};
  padding: 0 ${({ theme }) => theme.space.m};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.space.xl};
`
