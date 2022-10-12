import React, { useEffect } from 'react'
import { BottomSheet, Button, Spacer, Typography } from '@/components'
import useBottomSheet from '@/hooks/components/useBottomSheet'
import { CompanyDetailsContainer, CompanyDetailsFooter } from './styles'
import { CompanyDetailsProps } from './types'

export default function CompanyDetails({
  company,
  handleCloseDetails,
  handleDelete,
  handleGoToEdit
}: CompanyDetailsProps) {
  const { open, ref, close } = useBottomSheet()

  const handleEdit = () => {
    close()
    if (company?.id) handleGoToEdit(company.id)
  }
  const _handleDelete = () => {
    close()
    if (company?.id) handleDelete(company?.id)
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
      <CompanyDetailsContainer>
        <Typography size="xl">{company?.name}</Typography>
        <Spacer vertical="s" />
        <Typography color="secondary">{company?.description}</Typography>
        <Spacer vertical="l" />
        <Typography>{company?.contact?.email}</Typography>
        <Spacer vertical="s" />
        <Typography>{company?.contact?.phone}</Typography>
        <Spacer vertical="s" />
        <Typography>{company?.contact?.web}</Typography>
        <Spacer vertical="xl" />
        <CompanyDetailsFooter>
          <Button text={'Edit company'} onPress={handleEdit} />
          <Button
            text={'Delete company'}
            type="danger"
            onPress={_handleDelete}
          />
        </CompanyDetailsFooter>
      </CompanyDetailsContainer>
    </BottomSheet>
  )
}
