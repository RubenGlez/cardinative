import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const MostFollowedCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.bg_1};
  height: 80px;
  border-radius: ${({ theme }) => theme.space.s};
  width: ${windowWidth * 0.75}px;
  margin: ${({ theme }) => theme.space.s};
  margin-right: ${({ theme }) => theme.space.m};
  flex-direction: row;
  shadow-color: ${({ theme }) => theme.color.bg_5};
  shadow-opacity: 0.5;
  shadow-radius: ${({ theme }) => theme.space.s};
  shadow-offset: 0px ${({ theme }) => theme.space.xs};
`

export const MostFollowedCardLeftSide = styled.View`
  background-color: ${({ theme }) => theme.color.bg_2};
  width: 80px;
  justify-content: center;
`

export const MostFollowedCardRightSide = styled.View`
  justify-content: center;
  flex: 1;
`
export const MostFollowedCardRightSideTop = styled.View`
  padding: 0 ${({ theme }) => theme.space.m} ${({ theme }) => theme.space.s};
`
export const MostFollowedCardRightSideBottom = styled.View`
  padding: 0 ${({ theme }) => theme.space.m};
`
