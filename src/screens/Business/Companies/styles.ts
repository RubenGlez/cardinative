import styled from 'styled-components/native'

export const CompaniesContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg_1};
`
export const CompaniesHeader = styled.View`
  height: ${({ theme }) => theme.space.xxl};
  padding: 0 ${({ theme }) => theme.space.m};
  justify-content: center;
  background-color: ${({ theme }) => theme.color.bg_1};
`
export const CompaniesContent = styled.View`
  flex: 1;
`
export const CompaniesFooter = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.space.m};
  bottom: ${({ theme }) => theme.space.m};
`
