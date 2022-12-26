import { Typography } from '@/components'
import React from 'react'
import {
  CompanyItemContainer,
  CompanyItemInnerContainer,
  CompanyItemLeftContainer,
  CompanyItemRightContainer
} from './styles'
import { CompanyItemProps } from './types'

export default function CompanyItem({
  company,
  handleShowDetails
}: CompanyItemProps) {
  return (
    <CompanyItemContainer onPress={handleShowDetails(company.id)}>
      <CompanyItemInnerContainer>
        <CompanyItemLeftContainer>
          <Typography size="l" color="primary">
            {company.name}
          </Typography>
        </CompanyItemLeftContainer>
        <CompanyItemRightContainer>
          <Typography size="m" color="secondary">
            {`${company.cards.length} tarjetas`}
          </Typography>
        </CompanyItemRightContainer>
      </CompanyItemInnerContainer>
    </CompanyItemContainer>
  )
}
