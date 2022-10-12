import React, { useEffect } from 'react'
import { BottomSheet, Button, Spacer, Typography } from '@/components'
import useBottomSheet from '@/hooks/components/useBottomSheet'
import { PromotionDetailsContainer, PromotionDetailsFooter } from './styles'
import { PromotionDetailsProps } from './types'
import useIntl from '@/hooks/useIntl'

export default function PromotionDetails({
  promotion,
  handleCloseDetails,
  handleDelete,
  handleGoToEdit
}: PromotionDetailsProps) {
  const { open, ref, close } = useBottomSheet()
  const { formatStringDate } = useIntl()

  const handleEdit = () => {
    if (promotion?.id) handleGoToEdit(promotion.id)
    close()
  }
  const _handleDelete = () => {
    if (promotion?.id) handleDelete(promotion?.id)
  }

  useEffect(() => {
    if (promotion) open()
    else close()
  }, [close, promotion, open])

  return (
    <BottomSheet
      ref={ref}
      label={'Promotion details'}
      onClose={handleCloseDetails}>
      <PromotionDetailsContainer>
        <Typography size="xl">{promotion?.name}</Typography>
        <Spacer vertical="s" />
        <Typography color="secondary">{promotion?.description}</Typography>
        <Spacer vertical="l" />
        <Typography>{`${1000} suscriptiores`}</Typography>
        <Spacer vertical="l" />
        <Typography>{`desde ${formatStringDate(
          promotion?.validFrom ?? ''
        )}`}</Typography>
        <Spacer vertical="s" />
        <Typography>{`hasta ${formatStringDate(
          promotion?.validTo ?? ''
        )}`}</Typography>
        <Spacer vertical="xl" />
        <PromotionDetailsFooter>
          <Button text={'Edit promotion'} onPress={handleEdit} />
          <Button
            text={'Delete promotion'}
            type="danger"
            onPress={_handleDelete}
          />
        </PromotionDetailsFooter>
      </PromotionDetailsContainer>
    </BottomSheet>
  )
}
