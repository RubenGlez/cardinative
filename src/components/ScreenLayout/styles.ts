import styled from 'styled-components/native'

export const ScreenLayoutContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg_1};
`

export const ScreenLayoutHeader = styled.View`
  height: 64px;
  flex-direction: row;
  align-items: center;
  padding: 0 ${({ theme }) => theme.space.m};
`

export const ScreenLayoutContent = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space.m};
`

export const ScreenLayoutFooter = styled.View`
  background-color: green;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${({ theme }) => theme.space.m};
`
