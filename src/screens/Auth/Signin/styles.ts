import styled from 'styled-components/native'

export const SigninContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => theme.space.l};
  background-color: ${({ theme }) => theme.color.bg_1};
`

export const OtherActionsContainer = styled.View`
  flex-direction: row;
`
