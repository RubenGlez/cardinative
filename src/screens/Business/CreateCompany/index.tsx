import React from 'react'
import { Button, Input, Layout, Spacer, Typography } from '@/components'
import {
  CreateCompanyFormContainer,
  CreateCompanyFormContent,
  CreateCompanyFormFooter,
  CreateCompanyFormHeader
} from './styles'
import useCreateCompanyForm from '@/hooks/company/useCreateCompany'

export default function CreateCompanyForm() {
  const { handleSubmit, handleChange, values } = useCreateCompanyForm()

  return (
    <Layout type="screen">
      <CreateCompanyFormContainer>
        <CreateCompanyFormHeader>
          <Typography size="xl">Crea tu empresa</Typography>
        </CreateCompanyFormHeader>
        <CreateCompanyFormContent>
          <Input
            size="big"
            placeholder="name"
            onChangeText={handleChange('name')}
            value={values.name}
          />
          <Spacer vertical="m" />
          <Input
            size="big"
            placeholder="description"
            onChangeText={handleChange('description')}
            value={values.description}
          />
          <Spacer vertical="m" />
          <Input
            size="big"
            placeholder="email"
            onChangeText={handleChange('contact.email')}
            value={values.contact.email}
          />
          <Spacer vertical="m" />
          <Input
            size="big"
            placeholder="phone"
            onChangeText={handleChange('contact.phone')}
            value={values.contact.phone}
          />
          <Spacer vertical="m" />
          <Input
            size="big"
            placeholder="web"
            onChangeText={handleChange('contact.web')}
            value={values.contact.web}
          />
        </CreateCompanyFormContent>
        <CreateCompanyFormFooter>
          <Button text="Crear" onPress={handleSubmit} />
        </CreateCompanyFormFooter>
      </CreateCompanyFormContainer>
    </Layout>
  )
}
