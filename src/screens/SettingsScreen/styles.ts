import styled from 'styled-components/native'

export const SettingsContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space.l};
  background-color: ${({ theme }) => theme.color.bg_1};
`

export const ProfileContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.color.bg_4};
  border-radius: ${({ theme }) => theme.radius.m};
  padding: ${({ theme }) => theme.space.m};
`

export const LogoutContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`
