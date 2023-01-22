import React from 'react'
import { Typography } from '@/components'
import {
  MostFollowedCard,
  MostFollowedCardLeftSide,
  MostFollowedCardRightSide,
  MostFollowedCardRightSideBottom,
  MostFollowedCardRightSideTop
} from './styles'

import { useNavigation } from '@react-navigation/native'
import {
  BUSINESS_EDIT_PROMOTION_SCREEN,
  BUSINESS_STACK,
  ROLE_STACK
} from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { Promotion } from '@/entities'

interface MostFollowedPromotionCardProps {
  promoId: Promotion['id']
  name: Promotion['name']
  description: string
  position: number
}

export default function MostFollowedPromotionCard({
  promoId,
  name,
  description,
  position
}: MostFollowedPromotionCardProps) {
  const { navigate } = useNavigation<RootNavigation>()
  const handlePressPromo = (id: Promotion['id']) => () => {
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
    <MostFollowedCard onPress={handlePressPromo(promoId)}>
      <MostFollowedCardLeftSide>
        <Typography size="xl" color="inactive" align="center">
          {`#${position + 1}`}
        </Typography>
      </MostFollowedCardLeftSide>
      <MostFollowedCardRightSide>
        <MostFollowedCardRightSideTop>
          <Typography size="m" color="primary">
            {name}
          </Typography>
        </MostFollowedCardRightSideTop>
        <MostFollowedCardRightSideBottom>
          <Typography size="m" color="secondary" numberOfLines={1}>
            {description}
          </Typography>
        </MostFollowedCardRightSideBottom>
      </MostFollowedCardRightSide>
    </MostFollowedCard>
  )
}
