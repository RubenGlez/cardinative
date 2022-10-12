import styled from 'styled-components/native'

export const CardsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg_1};
`
export const CardsHeader = styled.View`
  height: ${({ theme }) => theme.space.xxl};
  padding: 0 ${({ theme }) => theme.space.m};
  justify-content: center;
  background-color: ${({ theme }) => theme.color.bg_1};
`
export const CardsContent = styled.View`
  flex: 1;
`
export const CardsFooter = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.space.m};
  bottom: ${({ theme }) => theme.space.m};
`
