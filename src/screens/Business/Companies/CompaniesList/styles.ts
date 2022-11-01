import styled from 'styled-components/native'

export const CompanyItemContainer = styled.TouchableOpacity``

export const CompanyItemInnerContainer = styled.View`
  height: ${({ theme }) => theme.space.xxl};
  background-color: ${({ theme }) => theme.color.bg_1};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.bg_3};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CompanyItemLeftContainer = styled.View``
export const CompanyItemRightContainer = styled.View``
