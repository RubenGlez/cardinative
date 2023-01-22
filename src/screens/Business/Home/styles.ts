import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg_1};
`

export const HomeSection = styled.View`
  margin-bottom: ${({ theme }) => theme.space.l};
`
export const HomeSectionHeader = styled.View`
  padding: ${({ theme }) => theme.space.m};
`
export const HomeSectionContent = styled.View`
  padding: 0 ${({ theme }) => theme.space.m};
`
