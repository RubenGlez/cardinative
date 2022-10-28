import React from 'react'
import { Button, Input, ScreenLayout } from '@/components'
import { CardsContent, CardsFooter, CardsHeader } from './styles'
import CardsList from './CardsList'
import CardDetails from './CardDetails'
import useCardsScreen from '@/hooks/card/useCardsScreen'

export default function Cards() {
  const {
    selectedCard,
    search,
    filteredOptions,
    handleShowDetails,
    handleCloseDetails,
    handleGoToEdit,
    handleDelete,
    handleGoToCreate
  } = useCardsScreen()

  return (
    <ScreenLayout title={'Tarjetas'}>
      <CardsHeader>
        <Input placeholder="Buscar tarjeta..." onChangeText={search} />
      </CardsHeader>
      <CardsContent>
        <CardsList
          cards={filteredOptions}
          handleShowDetails={handleShowDetails}
        />
        <CardDetails
          card={selectedCard}
          handleCloseDetails={handleCloseDetails}
          handleGoToEdit={handleGoToEdit}
          handleDelete={handleDelete}
        />
      </CardsContent>
      <CardsFooter>
        <Button text={'+'} onPress={handleGoToCreate} />
      </CardsFooter>
    </ScreenLayout>
  )
}
