import styled from 'styled-components/native'

export const EditCardFormContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space.s};
`

export const EditCardFormContent = styled.ScrollView`
  flex: 1;
`

export const EditCardFormFooter = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.bg_1};
  padding: ${({ theme }) => theme.space.s};
`
