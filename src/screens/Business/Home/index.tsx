import React from 'react'
import { Typography } from '@/components'
import {
  HomeContainer,
  HomeSection,
  HomeSectionContent,
  HomeSectionHeader,
  MostFollowedCard,
  MostFollowedCardLeftSide,
  MostFollowedCardRightSide,
  MostFollowedCardRightSideBottom,
  MostFollowedCardRightSideTop
} from './styles'
import { FlatList } from 'react-native'
import useMetrics from '@/hooks/metrics/useMetrics'
import { Promotion } from '@/entities'
import { useNavigation } from '@react-navigation/native'
import {
  BUSINESS_EDIT_PROMOTION_SCREEN,
  BUSINESS_STACK,
  ROLE_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'

export default function Home() {
  const {
    onDatePromotionsSortedBySubscriptions,
    promotionsOutDate,
    onDatePromotionsSortedByCompletedSubscriptions,
    subscriptionsCounterByPromotionId
  } = useMetrics()
  const { navigate } = useNavigation<RootNavigation>()
  const handlePressPromo = (id: string) => () => {
    navigate(ROLE_STACK, {
      screen: BUSINESS_STACK,
      params: {
        screen: BUSINESS_EDIT_PROMOTION_SCREEN,
        params: {
          promotionIdToEdit: id
        }
      }
    })
  }

  return (
    <HomeContainer>
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="m" color="primary">
            Promos en curso con mas suscripciones
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <FlatList
            data={onDatePromotionsSortedBySubscriptions}
            horizontal={true}
            renderItem={({ item, index }) => {
              const promo = item as Promotion
              return (
                <MostFollowedCard
                  key={`bySubs_${promo?.id}`}
                  onPress={handlePressPromo(promo?.id)}>
                  <MostFollowedCardLeftSide>
                    <Typography size="xl" color="primary" align="center">
                      {`#${index + 1}`}
                    </Typography>
                  </MostFollowedCardLeftSide>
                  <MostFollowedCardRightSide>
                    <MostFollowedCardRightSideTop>
                      <Typography size="m" color="primary">
                        {promo?.name}
                      </Typography>
                    </MostFollowedCardRightSideTop>
                    <MostFollowedCardRightSideBottom>
                      <Typography size="m" color="primary">
                        {`${
                          subscriptionsCounterByPromotionId[promo?.id]
                        } subscripciones`}
                      </Typography>
                    </MostFollowedCardRightSideBottom>
                  </MostFollowedCardRightSide>
                </MostFollowedCard>
              )
            }}
          />
        </HomeSectionContent>
      </HomeSection>
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="m" color="primary">
            Promos en curso con mas suscripciones completadas
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <FlatList
            data={onDatePromotionsSortedByCompletedSubscriptions}
            horizontal={true}
            renderItem={({ item, index }) => {
              const promo = item as Promotion
              return (
                <MostFollowedCard
                  key={`byCompletedSubs_${promo?.id}`}
                  onPress={handlePressPromo(promo?.id)}>
                  <MostFollowedCardLeftSide>
                    <Typography size="xl" color="primary" align="center">
                      {`#${index + 1}`}
                    </Typography>
                  </MostFollowedCardLeftSide>
                  <MostFollowedCardRightSide>
                    <MostFollowedCardRightSideTop>
                      <Typography size="m" color="primary">
                        {promo?.name}
                      </Typography>
                    </MostFollowedCardRightSideTop>
                    <MostFollowedCardRightSideBottom>
                      <Typography size="m" color="primary">
                        {`${
                          subscriptionsCounterByPromotionId[promo?.id]
                        } subscripciones completadas`}
                      </Typography>
                    </MostFollowedCardRightSideBottom>
                  </MostFollowedCardRightSide>
                </MostFollowedCard>
              )
            }}
          />
        </HomeSectionContent>
      </HomeSection>
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="m" color="primary">
            Promos caducadas
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <FlatList
            data={promotionsOutDate}
            horizontal={true}
            renderItem={({ item, index }) => {
              const promo = item as Promotion
              return (
                <MostFollowedCard
                  key={`byOutdatedSubs_${promo?.id}`}
                  onPress={handlePressPromo(promo?.id)}>
                  <MostFollowedCardLeftSide>
                    <Typography size="xl" color="primary" align="center">
                      {`#${index + 1}`}
                    </Typography>
                  </MostFollowedCardLeftSide>
                  <MostFollowedCardRightSide>
                    <MostFollowedCardRightSideTop>
                      <Typography size="m" color="primary">
                        {promo?.name}
                      </Typography>
                    </MostFollowedCardRightSideTop>
                    <MostFollowedCardRightSideBottom>
                      <Typography size="m" color="primary">
                        {`caducada`}
                      </Typography>
                    </MostFollowedCardRightSideBottom>
                  </MostFollowedCardRightSide>
                </MostFollowedCard>
              )
            }}
          />
        </HomeSectionContent>
      </HomeSection>
    </HomeContainer>
  )
}
