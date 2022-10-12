import { Card, CardExtended } from '@/entities'

export interface CardDetailsProps {
  card: CardExtended | undefined
  handleCloseDetails: () => void
  handleDelete: (id: Card['id']) => void
  handleGoToEdit: (id: Card['id']) => void
}
