import React from 'react'
import { FlatList } from 'react-native'
import CardItem from './CardItem'
import { CardsListProps } from './types'

export default function CardsList({
  cards,
  handleShowDetails
}: CardsListProps) {
  return (
    <FlatList
      data={cards}
      renderItem={({ item }) => {
        return <CardItem card={item} handleShowDetails={handleShowDetails} />
      }}
    />
  )
}
