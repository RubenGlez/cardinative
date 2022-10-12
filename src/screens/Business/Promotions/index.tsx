import React, { useCallback } from 'react'
import { Button, Icon, Input, Selector, Spacer } from '@/components'
import {
  PromotionsContainer,
  PromotionsContent,
  PromotionsFooter,
  PromotionsHeader,
  SearchboxContainer
} from './styles'
import PromotionsList from './PromotionsList'
import PromotionDetails from './PromotionDetails'
import usePromotionsScreen from '@/hooks/promotion/usePromotionsScreen'

export default function Promotions() {
  const {
    selectedPromotion,
    search,
    filteredOptions,
    handleShowDetails,
    handleCloseDetails,
    handleGoToEdit,
    handleDelete,
    handleGoToCreate,
    cardsFilterOptions,
    cardsFilterValue,
    handleChangeCardsFilterValue
  } = usePromotionsScreen()

  const customInput = useCallback(() => <Icon name="filter-outline" />, [])

  return (
    <PromotionsContainer>
      <PromotionsHeader>
        <SearchboxContainer>
          <Input placeholder="Buscar promoción..." onChangeText={search} />
        </SearchboxContainer>
        <Spacer horizontal="m" />
        <Selector
          customInput={customInput}
          options={cardsFilterOptions}
          selected={cardsFilterValue}
          placeholder={'Filtrar por tarjeta'}
          onSelect={handleChangeCardsFilterValue}
        />
      </PromotionsHeader>
      <PromotionsContent>
        <PromotionsList
          promotions={filteredOptions}
          handleShowDetails={handleShowDetails}
        />
        <PromotionDetails
          promotion={selectedPromotion}
          handleCloseDetails={handleCloseDetails}
          handleGoToEdit={handleGoToEdit}
          handleDelete={handleDelete}
        />
      </PromotionsContent>
      <PromotionsFooter>
        <Button text={'+'} onPress={handleGoToCreate} />
      </PromotionsFooter>
    </PromotionsContainer>
  )
}
