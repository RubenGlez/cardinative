import { Typography } from '@/components'
import { SubscriptionStatus } from '@/entities'
import React, { useMemo } from 'react'
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
  const subsData = useMemo(() => {
    let inProgressSubs = 0
    let completedSubs = 0
    promotion.subscriptions.forEach(sub => {
      if (sub.status === SubscriptionStatus.inprogress) {
        ++inProgressSubs
      } else {
        ++completedSubs
      }
    })
    return {
      inProgressSubs,
      completedSubs
    }
  }, [promotion.subscriptions])

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
            {`${subsData.completedSubs} compleatadas`}
          </Typography>
          <Typography size="m" color="secondary">
            {`${subsData.inProgressSubs} en progreso`}
          </Typography>
        </PromotionItemRightContainer>
      </PromotionItemInnerContainer>
    </PromotionItemContainer>
  )
}
