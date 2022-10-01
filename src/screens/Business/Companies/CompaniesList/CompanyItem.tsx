import { Spacer, Typography } from '@/components'
import React from 'react'
import {
  CompanyItemContainer,
  CompanyItemInnerContainer,
  CompanyItemLeftContainer,
  CompanyItemRightContainer
} from './styles'

export default function CompanyItem({ company, handleShowDetails }) {
  return (
    <CompanyItemContainer onPress={handleShowDetails}>
      <CompanyItemInnerContainer>
        <CompanyItemLeftContainer>
          <Typography size="l" color="primary">
            {company.name}
          </Typography>
        </CompanyItemLeftContainer>
        <CompanyItemRightContainer>
          <Typography size="m" color="secondary">
            4 tarjetas
          </Typography>
          <Spacer vertical="s" />
          <Typography size="m" color="secondary">
            28 promos
          </Typography>
        </CompanyItemRightContainer>
      </CompanyItemInnerContainer>
    </CompanyItemContainer>
  )
}
