import React from 'react'
import { FlatList } from 'react-native'
import CompanyItem from './CompanyItem'
import { CompaniesListProps } from './types'

export default function CompaniesList({
  companies,
  handleShowDetails
}: CompaniesListProps) {
  return (
    <FlatList
      data={companies}
      renderItem={({ item }) => {
        return (
          <CompanyItem company={item} handleShowDetails={handleShowDetails} />
        )
      }}
    />
  )
}
