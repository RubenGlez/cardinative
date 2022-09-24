import React from 'react'
import {
  Button,
  DatePicker,
  Input,
  Loading,
  ScreenLayout,
  Selector,
  Spacer
} from '@/components'
import {
  CreatePromotionFormContainer,
  CreatePromotionFormContent,
  CreatePromotionFormFooter
} from './styles'
import useCreatePromotionForm from '@/hooks/promotion/useCreatePromotionForm'

export default function CreatePromotion() {
  const {
    handleSubmit,
    handleChange,
    values,
    isLoading,
    companyOptions,
    cardsOptions,
    typesOptions
  } = useCreatePromotionForm()

  return (
    <ScreenLayout title="Crea tu promoción">
      {isLoading && <Loading />}
      <CreatePromotionFormContainer>
        <CreatePromotionFormContent>
          <Selector
            options={companyOptions}
            selected={values.company}
            placeholder={'Select company'}
            onSelect={handleChange('company')}
          />
          <Spacer vertical="m" />
          <Selector
            options={cardsOptions}
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
            options={typesOptions}
            selected={values.type}
            placeholder={'Select type'}
            onSelect={handleChange('type')}
          />
          <Spacer vertical="m" />
          <DatePicker
            label="Válido desde"
            value={values.validFrom}
            onChange={handleChange('validFrom')}
          />
          <Spacer vertical="m" />
          <DatePicker
            label="Válido hasta"
            value={values.validTo}
            onChange={handleChange('validTo')}
          />
        </CreatePromotionFormContent>
        <CreatePromotionFormFooter>
          <Button text="Crear" onPress={handleSubmit} />
        </CreatePromotionFormFooter>
      </CreatePromotionFormContainer>
    </ScreenLayout>
  )
}
