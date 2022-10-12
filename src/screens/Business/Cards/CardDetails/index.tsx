import React, { useEffect } from 'react'
import { BottomSheet, Button, Icon, Spacer, Typography } from '@/components'
import useBottomSheet from '@/hooks/components/useBottomSheet'
import { CardDetailsContainer, CardDetailsFooter } from './styles'
import { CardDetailsProps } from './types'
import { useTheme } from '@/hooks/useTheme'

export default function CardDetails({
  card,
  handleCloseDetails,
  handleDelete,
  handleGoToEdit
}: CardDetailsProps) {
  const { open, ref, close } = useBottomSheet()
  const theme = useTheme()

  const handleEdit = () => {
    if (card?.id) handleGoToEdit(card.id)
    close()
  }
  const _handleDelete = () => {
    if (card?.id) handleDelete(card?.id)
  }

  useEffect(() => {
    if (card) open()
    else close()
  }, [close, card, open])

  return (
    <BottomSheet ref={ref} label={'Card details'} onClose={handleCloseDetails}>
      <CardDetailsContainer>
        <Icon
          name="card-outline"
          size="xl"
          color={card?.color ?? theme.color.text_secondary}
        />
        <Typography size="xl">{card?.name}</Typography>
        <Spacer vertical="s" />
        <Typography color="secondary">{card?.description}</Typography>
        <Spacer vertical="l" />
        <Typography>{`${card?.promotions.length} promociones`}</Typography>
        <Spacer vertical="xl" />
        <CardDetailsFooter>
          <Button text={'Edit card'} onPress={handleEdit} />
          <Button text={'Delete card'} type="danger" onPress={_handleDelete} />
        </CardDetailsFooter>
      </CardDetailsContainer>
    </BottomSheet>
  )
}
