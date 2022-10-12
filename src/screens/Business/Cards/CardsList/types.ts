import { Card, CardExtended } from '@/entities'

export interface CardsListProps {
  cards: CardExtended[]
  handleShowDetails: (id: Card['id']) => () => void
}
export interface CardItemProps {
  card: CardExtended
  handleShowDetails: (id: Card['id']) => () => void
}
