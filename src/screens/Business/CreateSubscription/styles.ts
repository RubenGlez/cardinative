import styled from 'styled-components/native'

export const CreateSubscriptionContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg_1};
  padding: ${({ theme }) => theme.space.m};
  flex-direction: column;
  align-items: center;
`

export const QRSCannerBackside = styled.View`
  width: 256px;
  height: 256px;
  background-color: ${({ theme }) => theme.color.bg_3};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.m};
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme.space.l};
`
