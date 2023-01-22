import React from 'react'
import { Loading, Typography } from '@/components'
import {
  HomeContainer,
  HomeSection,
  HomeSectionContent,
  HomeSectionHeader
} from './styles'
import { FlatList } from 'react-native'
import useMetrics from '@/hooks/metrics/useMetrics'
import { MostFollowedPromotionCard } from '@/containers'

export default function Home() {
  const {
    isLoading,
    unexpiredMostCompletedPromotions,
    unexpiredMostFollowedPromotions,
    expiredMostCompletedPromotions,
    expiredMostFollowedPromotions
  } = useMetrics()

  return (
    <HomeContainer>
      {isLoading && <Loading />}
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="m" color="secondary">
            Promos en curso con mas suscripciones
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <FlatList
            data={unexpiredMostFollowedPromotions}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <MostFollowedPromotionCard
                  promoId={item.id}
                  name={item.name}
                  description={`${item.subsCounter} subscripciones`}
                  position={index}
                />
              )
            }}
          />
        </HomeSectionContent>
      </HomeSection>
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="m" color="secondary">
            Promos en curso con mas suscripciones completadas
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <FlatList
            data={unexpiredMostCompletedPromotions}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <MostFollowedPromotionCard
                  promoId={item.id}
                  name={item.name}
                  description={`${item.subsCounter} subscripciones completadas`}
                  position={index}
                />
              )
            }}
          />
        </HomeSectionContent>
      </HomeSection>

      <HomeSection>
        <HomeSectionHeader>
          <Typography size="m" color="secondary">
            Promos caducadas con mas suscripciones
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <FlatList
            data={expiredMostFollowedPromotions}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <MostFollowedPromotionCard
                  promoId={item.id}
                  name={item.name}
                  description={`${item.subsCounter} subscripciones`}
                  position={index}
                />
              )
            }}
          />
        </HomeSectionContent>
      </HomeSection>
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="m" color="secondary">
            Promos caducadas con mas suscripciones completadas
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <FlatList
            data={expiredMostCompletedPromotions}
            horizontal={true}
            renderItem={({ item, index }) => {
              if (!item) return <></>
              return (
                <MostFollowedPromotionCard
                  promoId={item.id}
                  name={item.name}
                  description={`${item.subsCounter} subscripciones completadas`}
                  position={index}
                />
              )
            }}
          />
        </HomeSectionContent>
      </HomeSection>
    </HomeContainer>
  )
}
