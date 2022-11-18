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

export default function Home() {
  const {
    onDatePromotionsSortedBySubscriptions,
    promotionsOutDate,
    onDatePromotionsSortedByCompletedSubscriptions
  } = useMetrics()
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
                <MostFollowedCard key={promo.id}>
                  <MostFollowedCardLeftSide>
                    <Typography size="xl" color="primary" align="center">
                      {`#${index + 1}`}
                    </Typography>
                  </MostFollowedCardLeftSide>
                  <MostFollowedCardRightSide>
                    <MostFollowedCardRightSideTop>
                      <Typography size="m" color="primary">
                        {promo.name}
                      </Typography>
                    </MostFollowedCardRightSideTop>
                    <MostFollowedCardRightSideBottom>
                      <Typography size="m" color="primary">
                        {`${promo.subscriptions.length} subs`}
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
                <MostFollowedCard key={promo.id}>
                  <MostFollowedCardLeftSide>
                    <Typography size="xl" color="primary" align="center">
                      {`#${index + 1}`}
                    </Typography>
                  </MostFollowedCardLeftSide>
                  <MostFollowedCardRightSide>
                    <MostFollowedCardRightSideTop>
                      <Typography size="m" color="primary">
                        {promo.name}
                      </Typography>
                    </MostFollowedCardRightSideTop>
                    <MostFollowedCardRightSideBottom>
                      <Typography size="m" color="primary">
                        {`${promo.subscriptions.length} subs completadas`}
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
                <MostFollowedCard key={promo.id}>
                  <MostFollowedCardLeftSide>
                    <Typography size="xl" color="primary" align="center">
                      {`#${index + 1}`}
                    </Typography>
                  </MostFollowedCardLeftSide>
                  <MostFollowedCardRightSide>
                    <MostFollowedCardRightSideTop>
                      <Typography size="m" color="primary">
                        {promo.name}
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
