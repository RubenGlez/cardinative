import React, { useState } from 'react'
import { Button, Selector, Spacer, Typography } from '@/components'
import useCreateSubscription from '@/hooks/subscription/useCreateSubscription'
import { RouteProp, useRoute } from '@react-navigation/native'
import { BusinessTabsStackParamsList } from '@/navigation/types'
import useUpdateSubscription from '@/hooks/subscription/useUpdateSubscription'
import { CreateSubscriptionContainer } from './styles'

enum Progress {
  waiting = 'waiting',
  creatingSubscription = 'creatingSubscription',
  updatingSubscription = 'updatingSubscription',
  finished = 'finished',
  errorUpdating = 'errorUpdating',
  unknownErrorCreating = 'unknownErrorCreating'
}
export default function CreateSubscription() {
  const [progress, setProgress] = useState<Progress[]>([])
  const {
    params: { promotionId }
  } =
    useRoute<
      RouteProp<BusinessTabsStackParamsList, 'BusinessCreateSubscription'>
    >()
  const [selectedUserId, setselectedUserId] = useState(
    '6361436714f451df6db5c321'
  )

  const handleSuccess = () => {
    setProgress(prev => {
      return [...prev, Progress.finished]
    })
  }
  const handleUpdateError = () => {
    setProgress(prev => {
      return [...prev, Progress.errorUpdating]
    })
  }
  const { mutate: mutateUpdate } = useUpdateSubscription({
    handleSuccess,
    handleError: handleUpdateError
  })

  const handleError = (error: any) => {
    if (error.name === 'SubscriptionAlreadyExist') {
      setProgress(prev => {
        return [...prev, Progress.updatingSubscription]
      })
      mutateUpdate({
        id: error.info.id
      })
    } else {
      setProgress(prev => {
        return [...prev, Progress.unknownErrorCreating]
      })
    }
  }

  const { mutate: mutateCreate } = useCreateSubscription({
    handleError,
    handleSuccess
  })

  const handleCreateSubscription = () => {
    setProgress(prev => {
      return [...prev, Progress.creatingSubscription]
    })
    mutateCreate({
      promotion: promotionId,
      subscriptor: selectedUserId
    })
  }

  return (
    <CreateSubscriptionContainer>
      <Typography>{`Promoción: ${promotionId}`}</Typography>
      <Spacer vertical="l" />
      <Selector
        options={[
          {
            label: 'basic@gmail.com',
            value: '6361436714f451df6db5c321'
          },
          {
            label: 'basic1@gmail.com',
            value: '6378bb0e5031172ecbe55a5b'
          }
        ]}
        selected={selectedUserId}
        placeholder={'Selecciona usuario'}
        onSelect={selected => {
          setselectedUserId(selected)
        }}
      />
      <Spacer vertical="xl" />
      {progress.includes(Progress.waiting) && (
        <Typography>Vamos allá!</Typography>
      )}
      {progress.includes(Progress.creatingSubscription) && (
        <Typography>Creando subscripción</Typography>
      )}
      {progress.includes(Progress.updatingSubscription) && (
        <Typography>Actualizando subscripción</Typography>
      )}
      {progress.includes(Progress.finished) && (
        <Typography>Subscripción canjeada</Typography>
      )}
      {progress.includes(Progress.errorUpdating) && (
        <Typography>Error actualizando la subscripción</Typography>
      )}
      {progress.includes(Progress.unknownErrorCreating) && (
        <Typography>Error desconocido creando la subscripción</Typography>
      )}
      <Spacer vertical="xl" />

      <Button text={'Crear subscripción'} onPress={handleCreateSubscription} />
    </CreateSubscriptionContainer>
  )
}
