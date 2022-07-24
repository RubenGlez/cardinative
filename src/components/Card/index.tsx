import React from 'react'
import Typography from '../Typography'
import { CardContainer } from './styles'
import { CardProps } from './types'

export default function Card({ companyName, description, title }: CardProps) {
  return (
    <CardContainer>
      <Typography size="l">{companyName}</Typography>
      <Typography size="xl">{title}</Typography>
      <Typography size="m">{description}</Typography>
    </CardContainer>
  )
}
