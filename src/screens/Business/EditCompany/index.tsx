import React from 'react'
import { Button, Input, ScreenLayout, Spacer } from '@/components'
import {
  EditCompanyFormContainer,
  EditCompanyFormContent,
  EditCompanyFormFooter
} from './styles'
import useUpdateCompanyForm from '@/hooks/company/useUpdateCompanyForm'
import { RouteProp, useRoute } from '@react-navigation/native'
import { BusinessStackParamsList } from '@/navigation/types'

export default function EditCompany() {
  const {
    params: { companyIdToEdit }
  } = useRoute<RouteProp<BusinessStackParamsList, 'BusinessEditCompany'>>()
  const { handleSubmit, handleChange, values } =
    useUpdateCompanyForm(companyIdToEdit)

  return (
    <ScreenLayout title="Edita tu empresa">
      <EditCompanyFormContainer>
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
    </ScreenLayout>
  )
}
