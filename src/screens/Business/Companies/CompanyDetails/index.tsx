import { BottomSheet, Typography } from '@/components'
import React from 'react'

export default function CompanyDetails({ company }) {
  return (
    <BottomSheet label={'asdfasdf'}>
      <Typography>{JSON.stringify(company)}</Typography>
    </BottomSheet>
  )
}
