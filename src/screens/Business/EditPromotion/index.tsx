import React from 'react'
import { Button, Input, ScreenLayout, Selector, Spacer } from '@/components'
import {
  EditPromotionFormContainer,
  EditPromotionFormContent,
  EditPromotionFormFooter
} from './styles'
import useUpdatePromotionForm from '@/hooks/promotion/useUpdatePromotionForm'
import { RouteProp, useRoute } from '@react-navigation/native'
import { BusinessStackParamsList } from '@/navigation/types'

export default function EditPromotion() {
  const {
    params: { promotionIdToEdit }
  } = useRoute<RouteProp<BusinessStackParamsList, 'EditPromotion'>>()
  const { handleSubmit, handleChange, values } =
    useUpdatePromotionForm(promotionIdToEdit)

  return (
    <ScreenLayout title="Edita la promocion">
      <EditPromotionFormContainer>
        <EditPromotionFormContent>
          <Selector
            options={[]}
            selected={values.company}
            placeholder={'Select promotion'}
            onSelect={handleChange('promotion')}
          />
          <Spacer vertical="m" />
          <Selector
            options={[]}
            selected={values.card}
            placeholder={'Select card'}
            onSelect={handleChange('card')}
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
            placeholder="description"
            onChangeText={handleChange('description')}
            value={values.description}
          />
          <Spacer vertical="m" />
          <Selector
            options={[]}
            selected={values.type}
            placeholder={'Select type'}
            onSelect={handleChange('type')}
          />
        </EditPromotionFormContent>
        <EditPromotionFormFooter>
          <Button text="Guardar" onPress={handleSubmit} />
        </EditPromotionFormFooter>
      </EditPromotionFormContainer>
    </ScreenLayout>
  )
}
