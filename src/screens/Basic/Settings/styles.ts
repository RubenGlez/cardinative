import styled from 'styled-components/native'

export const SettingsContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space.l};
  background-color: ${({ theme }) => theme.color.bg_1};
`

export const LogoutContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`
