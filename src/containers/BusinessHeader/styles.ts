import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.color.bg_1};
  padding: 0 ${({ theme }) => theme.space.m};
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.bg_4};
  height: ${({ theme }) => theme.space.xl};
`
