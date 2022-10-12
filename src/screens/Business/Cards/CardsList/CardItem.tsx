import { Typography } from '@/components'
import React from 'react'
import {
  CardItemContainer,
  CardItemInnerContainer,
  CardItemLeftContainer,
  CardItemRightContainer
} from './styles'
import { CardItemProps } from './types'

export default function CardItem({ card, handleShowDetails }: CardItemProps) {
  return (
    <CardItemContainer onPress={handleShowDetails(card.id)}>
      <CardItemInnerContainer>
        <CardItemLeftContainer>
          <Typography size="l" color="primary">
            {card.name}
          </Typography>
        </CardItemLeftContainer>
        <CardItemRightContainer>
          <Typography size="m" color="secondary">
            {`${card.promotions.length} promos`}
          </Typography>
        </CardItemRightContainer>
      </CardItemInnerContainer>
    </CardItemContainer>
  )
}
