import React from 'react'
import { Button, Input, ScreenLayout, Spacer } from '@/components'
import {
  EditCardFormContainer,
  EditCardFormContent,
  EditCardFormFooter
} from './styles'
import useUpdateCardForm from '@/hooks/card/useUpdateCardForm'
import { RouteProp, useRoute } from '@react-navigation/native'
import { BusinessStackParamsList } from '@/navigation/types'

export default function EditCard() {
  const {
    params: { cardIdToEdit }
  } = useRoute<RouteProp<BusinessStackParamsList, 'BusinessEditCard'>>()
  const { handleSubmit, handleChange, values } = useUpdateCardForm(cardIdToEdit)

  return (
    <ScreenLayout title="Edita la tarjeta">
      <EditCardFormContainer>
        <EditCardFormContent>
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
        </EditCardFormContent>
        <EditCardFormFooter>
          <Button text="Guardar" onPress={handleSubmit} />
        </EditCardFormFooter>
      </EditCardFormContainer>
    </ScreenLayout>
  )
}
