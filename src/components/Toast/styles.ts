import styled from 'styled-components/native'

export const CustomToastOutterContainer = styled.View`
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.space.s} ${theme.space.m} 0 ${theme.space.m}`};
`

export const CustomToastContainer = styled.View<{
  type: string
}>`
  width: 100%;
  min-height: ${({ theme }) => theme.space.xl};
  background-color: ${({ theme, type }) => {
    if (type === 'success') {
      return theme.color.util_success
    } else if (type === 'error') {
      return theme.color.util_danger
    }
    return theme.color.util_info
  }};
  border-radius: ${({ theme }) => theme.radius.m};
  padding: ${({ theme }) => `${theme.space.s} ${theme.space.m}`};
  flex-direction: row;
  align-items: center;
`
