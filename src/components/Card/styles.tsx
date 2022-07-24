import styled from 'styled-components/native'

export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.color.util_success};
  border-radius: ${({ theme }) => theme.radius.l};
  padding: ${({ theme }) => theme.space.l};
  height: 180px;
  margin-bottom: ${({ theme }) => theme.space.m};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
`
