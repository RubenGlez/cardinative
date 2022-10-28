import React from 'react'
import { Typography } from '@/components'
import {
  HomeContainer,
  HomeSection,
  HomeSectionContent,
  HomeSectionHeader
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="l" color="primary">
            Promociones más seguidas
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <Typography size="m" color="primary">
            Un listado con las promos activas con mas suscriptores
          </Typography>
        </HomeSectionContent>
      </HomeSection>
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="l" color="primary">
            Promociones más completadas
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <Typography size="m" color="primary">
            Un listado con las promos mas completadas por los usuarios
          </Typography>
        </HomeSectionContent>
      </HomeSection>
      <HomeSection>
        <HomeSectionHeader>
          <Typography size="l" color="primary">
            Estadísticas
          </Typography>
        </HomeSectionHeader>
        <HomeSectionContent>
          <Typography size="m" color="primary">
            14 promociones completadas de 230
          </Typography>
          <Typography size="m" color="primary">
            14 activas
          </Typography>
          <Typography size="m" color="primary">
            23 caducadas
          </Typography>
        </HomeSectionContent>
      </HomeSection>
    </HomeContainer>
  )
}
