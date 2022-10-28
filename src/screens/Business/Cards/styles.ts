import styled from 'styled-components/native'

export const CardsHeader = styled.View`
  height: ${({ theme }) => theme.space.xxl};
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
