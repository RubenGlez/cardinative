import styled from 'styled-components/native'

export const CardItemContainer = styled.TouchableOpacity``

export const CardItemInnerContainer = styled.View`
  height: ${({ theme }) => theme.space.xxl};
  background-color: ${({ theme }) => theme.color.bg_1};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.bg_3};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CardItemLeftContainer = styled.View``
export const CardItemRightContainer = styled.View``
