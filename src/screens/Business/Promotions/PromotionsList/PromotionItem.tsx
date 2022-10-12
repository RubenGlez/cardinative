import { Typography } from '@/components'
import React from 'react'
import {
  PromotionItemContainer,
  PromotionItemInnerContainer,
  PromotionItemLeftContainer,
  PromotionItemRightContainer
} from './styles'
import { PromotionItemProps } from './types'

export default function PromotionItem({
  promotion,
  handleShowDetails
}: PromotionItemProps) {
  return (
    <PromotionItemContainer onPress={handleShowDetails(promotion.id)}>
      <PromotionItemInnerContainer>
        <PromotionItemLeftContainer>
          <Typography size="l" color="primary">
            {promotion.name}
          </Typography>
        </PromotionItemLeftContainer>
        <PromotionItemRightContainer>
          <Typography size="m" color="secondary">
            {`${10} suscriptores`}
          </Typography>
        </PromotionItemRightContainer>
      </PromotionItemInnerContainer>
    </PromotionItemContainer>
  )
}
