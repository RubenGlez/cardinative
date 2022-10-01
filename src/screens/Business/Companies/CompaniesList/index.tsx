import React from 'react'
import { FlatList } from 'react-native'
import CompanyItem from './CompanyItem'

export default function CompaniesList({ companies }) {
  return (
    <FlatList
      data={companies}
      renderItem={({ item }) => {
        return <CompanyItem company={item} />
      }}
    />
  )
}
