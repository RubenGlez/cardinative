import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@/components'
import useCreateSubscription from '@/hooks/subscription/useCreateSubscription'
import { RouteProp, useRoute } from '@react-navigation/native'
import { BusinessTabsStackParamsList } from '@/navigation/types'
import useUpdateSubscription from '@/hooks/subscription/useUpdateSubscription'
import { View } from 'react-native'

enum Progress {
  readingUser = 'readingUser',
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
      subscriptor: '62c367ba2ceee4afb12c7983' // ruben@gmail.com
    })
  }

  useEffect(() => {
    setProgress(prev => {
      return [...prev, Progress.readingUser]
    })
  }, [])

  return (
    <View>
      {progress.includes(Progress.readingUser) && (
        <Typography>Obteniendo usuario</Typography>
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

      <Button text={'Crear subscripción'} onPress={handleCreateSubscription} />
    </View>
  )
}
