import { Typography } from '@/components'
import useGetSubscriptionsByStatus from '@/hooks/subscription/useGetSubscriptionsByStatus'
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
  const { activedSubsCounter, inactivedSubsCounter, completedSubsCounter } =
    useGetSubscriptionsByStatus(promotion.id)

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
            {`${completedSubsCounter} compleatadas`}
          </Typography>
          <Typography size="m" color="secondary">
            {`${activedSubsCounter} activas`}
          </Typography>
          <Typography size="m" color="secondary">
            {`${inactivedSubsCounter} inactivas`}
          </Typography>
        </PromotionItemRightContainer>
      </PromotionItemInnerContainer>
    </PromotionItemContainer>
  )
}
