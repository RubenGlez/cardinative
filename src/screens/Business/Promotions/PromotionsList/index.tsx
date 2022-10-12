import React from 'react'
import { FlatList } from 'react-native'
import PromotionItem from './PromotionItem'
import { PromotionsListProps } from './types'

export default function PromotionsList({
  promotions,
  handleShowDetails
}: PromotionsListProps) {
  return (
    <FlatList
      data={promotions}
      renderItem={({ item }) => {
        return (
          <PromotionItem
            promotion={item}
            handleShowDetails={handleShowDetails}
          />
        )
      }}
    />
  )
}
