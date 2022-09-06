import React from 'react'
import {
  Button,
  Input,
  Loading,
  ScreenLayout,
  Selector,
  Spacer
} from '@/components'
import {
  CreateCardFormContainer,
  CreateCardFormContent,
  CreateCardFormFooter
} from './styles'
import useCreateCardForm from '@/hooks/card/useCreateCardForm'
import useGetCompanies from '@/hooks/company/useGetCompanies'

export default function CreateCardForm() {
  const { handleSubmit, handleChange, values } = useCreateCardForm()
  const { data: companies = [], isLoading: isLoadingCompanies } =
    useGetCompanies()

  const companyOptions = companies?.map(comp => ({
    label: comp.name,
    value: comp.id ?? ''
  }))

  return (
    <ScreenLayout title="Crea tu tarjeta">
      {isLoadingCompanies && <Loading />}
      <CreateCardFormContainer>
        <CreateCardFormContent>
          <Selector
            options={companyOptions}
            selected={values.company}
            placeholder={'Select company'}
            onSelect={handleChange('company')}
          />
          <Spacer vertical="m" />
          <Input
            size="big"
            placeholder="name"
            onChangeText={handleChange('name')}
            value={values.name}
          />
          <Spacer vertical="m" />
          <Input
            size="big"
            placeholder="color"
            onChangeText={handleChange('color')}
            value={values.color}
          />
          <Spacer vertical="m" />
          <Input
            size="big"
            placeholder="logo"
            onChangeText={handleChange('logo')}
            value={values.logo}
          />
          <Spacer vertical="m" />
          <Input
            size="big"
            placeholder="description"
            onChangeText={handleChange('description')}
            value={values.description}
          />
        </CreateCardFormContent>
        <CreateCardFormFooter>
          <Button text="Crear" onPress={handleSubmit} />
        </CreateCardFormFooter>
      </CreateCardFormContainer>
    </ScreenLayout>
  )
}
