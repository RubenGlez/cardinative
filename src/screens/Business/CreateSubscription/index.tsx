import React, { useCallback, useState } from 'react'
import { Button, QRScanner, Spacer, Typography } from '@/components'
import useCreateSubscription from '@/hooks/subscription/useCreateSubscription'
import useUpdateSubscription from '@/hooks/subscription/useUpdateSubscription'
import {
  ButtonsContainer,
  CreateSubscriptionContainer,
  QRSCannerBackside
} from './styles'
import useNotifications from '@/hooks/components/useNotifications'

interface QRDataI {
  subscriptorId: string
  promotionId: string
}
export default function CreateSubscription() {
  const [QRData, setQRData] = useState<QRDataI>()
  const { showErrorToast, showSuccessToast } = useNotifications()

  const handleUpdateSuccess = () => {
    showSuccessToast({
      text1: 'Subscripción actualizada'
    })
  }
  const handleUpdateError = () => {
    showErrorToast({
      text1: 'Error actualizando la subscripción'
    })
  }
  const { mutate: mutateUpdate } = useUpdateSubscription({
    handleSuccess: handleUpdateSuccess,
    handleError: handleUpdateError
  })

  const handleCreateSuccess = () => {
    showSuccessToast({
      text1: 'Subscripción creada'
    })
  }
  const handleCreateError = (error: any) => {
    if (error.name === 'SubscriptionAlreadyExist') {
      mutateUpdate({
        id: error.info.id
      })
    } else {
      showErrorToast({
        text1: 'Error creando la subscripción'
      })
    }
  }
  const { mutate: mutateCreate } = useCreateSubscription({
    handleSuccess: handleCreateSuccess,
    handleError: handleCreateError
  })

  const handleCreateSubscription = useCallback(() => {
    if (!QRData) return
    mutateCreate({
      promotion: QRData.promotionId,
      subscriptor: QRData.subscriptorId
    })
  }, [QRData, mutateCreate])

  const onReadQR = (value: string) => {
    const JSONvalue = JSON.parse(value)
    const { subscriptorId, promotionId } = JSONvalue
    if (!!subscriptorId && !!promotionId) {
      setQRData(JSONvalue)
    }
  }

  const handleCancel = () => {
    setQRData(undefined)
  }

  return (
    <CreateSubscriptionContainer>
      <Typography>Escanéa el QR</Typography>

      <Spacer vertical="l" />

      {QRData ? (
        <QRSCannerBackside>
          <Typography size="xl">QR detectado</Typography>
        </QRSCannerBackside>
      ) : (
        <QRScanner onReadQR={onReadQR} />
      )}

      <Spacer vertical="l" />

      {QRData && (
        <ButtonsContainer>
          <Button type="danger" text="Cancelar" onPress={handleCancel} />
          <Button
            type={'primary'}
            text="Aceptar"
            onPress={handleCreateSubscription}
          />
        </ButtonsContainer>
      )}
    </CreateSubscriptionContainer>
  )
}
