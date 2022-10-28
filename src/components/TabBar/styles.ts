import styled from 'styled-components/native'

export const TabBarContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.bg_1};
  align-items: center;
  height: 56px;
`

// shadow-color: ${({ theme }) => theme.color.bg_4};
// shadow-offset-width: 0;
// shadow-offset-height: 2px;
// shadow-opacity: 0.25;
// shadow-radius: 4px;
// elevation: 5;

export const TabBarItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`
