import React from 'react'
import { Button, Input, Layout, Spacer, Typography } from '@/components'
import {
  EditCompanyFormContainer,
  EditCompanyFormContent,
  EditCompanyFormFooter,
  EditCompanyFormHeader
} from './styles'
import useUpdateCompany from '@/hooks/company/useUpdateCompany'
import { RouteProp, useRoute } from '@react-navigation/native'
import { BusinessStackParamsList } from '@/navigation/types'

export default function EditCompanyForm() {
  const {
    params: { companyIdToEdit }
  } = useRoute<RouteProp<BusinessStackParamsList, 'EditCompany'>>()
  const { handleSubmit, handleChange, values } =
    useUpdateCompany(companyIdToEdit)

  return (
    <Layout type="screen">
      <EditCompanyFormContainer>
        <EditCompanyFormHeader>
          <Typography size="xl">Edita tu empresa</Typography>
        </EditCompanyFormHeader>
        <EditCompanyFormContent>
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
        </EditCompanyFormContent>
        <EditCompanyFormFooter>
          <Button text="Guardar" onPress={handleSubmit} />
        </EditCompanyFormFooter>
      </EditCompanyFormContainer>
    </Layout>
  )
}