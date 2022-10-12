import styled from 'styled-components/native'

export const PromotionsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg_1};
`
export const PromotionsHeader = styled.View`
  height: ${({ theme }) => theme.space.xxl};
  padding: 0 ${({ theme }) => theme.space.m};
  flex-direction: row;
  align-items: center
  background-color: ${({ theme }) => theme.color.bg_1};
`
export const SearchboxContainer = styled.View`
  flex: 1;
`
export const PromotionsContent = styled.View`
  flex: 1;
`
export const PromotionsFooter = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.space.m};
  bottom: ${({ theme }) => theme.space.m};
`
