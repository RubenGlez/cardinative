import styled from 'styled-components/native'

export const PromotionItemContainer = styled.TouchableOpacity``

export const PromotionItemInnerContainer = styled.View`
  height: ${({ theme }) => theme.space.xxl};
  padding: 0 ${({ theme }) => theme.space.m};
  background-color: ${({ theme }) => theme.color.bg_1};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.bg_3};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PromotionItemLeftContainer = styled.View``
export const PromotionItemRightContainer = styled.View``
