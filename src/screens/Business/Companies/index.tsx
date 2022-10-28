import React from 'react'
import { Button, Input, ScreenLayout } from '@/components'
import { CompaniesContent, CompaniesFooter, CompaniesHeader } from './styles'
import CompaniesList from './CompaniesList'
import CompanyDetails from './CompanyDetails'
import useCompaniesScreen from '@/hooks/company/useCompaniesScreen'

export default function Companies() {
  const {
    selectedCompany,
    search,
    filteredOptions,
    handleShowDetails,
    handleCloseDetails,
    handleGoToEdit,
    handleDelete,
    handleGoToCreate
  } = useCompaniesScreen()

  return (
    <ScreenLayout title={'Empresas'}>
      <CompaniesHeader>
        <Input placeholder="Buscar empresa..." onChangeText={search} />
      </CompaniesHeader>
      <CompaniesContent>
        <CompaniesList
          companies={filteredOptions}
          handleShowDetails={handleShowDetails}
        />
        <CompanyDetails
          company={selectedCompany}
          handleCloseDetails={handleCloseDetails}
          handleGoToEdit={handleGoToEdit}
          handleDelete={handleDelete}
        />
      </CompaniesContent>
      <CompaniesFooter>
        <Button text={'+'} onPress={handleGoToCreate} />
      </CompaniesFooter>
    </ScreenLayout>
  )
}
