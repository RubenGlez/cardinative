import React, { useEffect } from 'react'
import { BottomSheet, Button, Spacer, Typography } from '@/components'
import useBottomSheet from '@/hooks/components/useBottomSheet'

export default function CompanyDetails({
  company,
  handleCloseDetails,
  handleDelete,
  handleGoToEdit
}) {
  const { open, ref, close } = useBottomSheet()

  const handleEdit = () => {
    close()
    handleGoToEdit(company?.id)
  }
  const _handleDelete = () => {
    close()
    handleDelete(company?.id)
  }

  useEffect(() => {
    if (company) open()
    else close()
  }, [close, company, open])

  return (
    <BottomSheet
      ref={ref}
      label={'Company details'}
      onClose={handleCloseDetails}>
      <Typography>{JSON.stringify(company)}</Typography>
      <Spacer vertical="l" />
      <Button text={'Edit company'} onPress={handleEdit} />
      <Spacer vertical="l" />
      <Button text={'Delete company'} type="danger" onPress={_handleDelete} />
    </BottomSheet>
  )
}
