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
import useGetCompanies from '@/hooks/company/useGetCompanies'

export default function CreatePromotion() {
  const { handleSubmit, handleChange, values } = useCreatePromotionForm()
  const { data: companies = [], isLoading: isLoadingPromotions } =
    useGetCompanies()

  const companyOptions = companies?.map(comp => ({
    label: comp.name,
    value: comp.id ?? ''
  }))

  return (
    <ScreenLayout title="Crea tu promoción">
      {isLoadingPromotions && <Loading />}
      <CreatePromotionFormContainer>
        <CreatePromotionFormContent>
          <Selector
            options={companyOptions}
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
          <Spacer vertical="m" />
          <DatePicker
            label="Válido desde"
            value={new Date()}
            onChange={() => {}}
          />
        </CreatePromotionFormContent>
        <CreatePromotionFormFooter>
          <Button text="Crear" onPress={handleSubmit} />
        </CreatePromotionFormFooter>
      </CreatePromotionFormContainer>
    </ScreenLayout>
  )
}
