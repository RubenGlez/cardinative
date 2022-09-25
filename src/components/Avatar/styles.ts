import styled from 'styled-components/native'

export const AvatarContainer = styled.View`
  height: ${({ theme }) => theme.space.l};
  width: ${({ theme }) => theme.space.l};
  border-radius: ${({ theme }) => theme.space.l};
  background-color: ${({ theme }) => theme.color.bg_4};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
