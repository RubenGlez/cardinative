import React, { useCallback } from 'react'
import { Input, Spacer, Typography, Loading } from '@/components'
import { OtherActionsContainer, SigninContainer } from './styles'
import Button from '@/components/Button'
import useSigninForm from '@/hooks/auth/useSigninForm'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'

export default function SigninScreen() {
  const { isLoading, handleChange, handleSubmit, values } = useSigninForm()
  const { navigate } = useNavigation<RootNavigation>()
  const handleGoToSigninScreen = useCallback(() => {
    navigate('AuthStack', {
      screen: 'SignupScreen'
    })
  }, [navigate])

  return (
    <SigninContainer>
      <Typography size="xl" align="center">
        Acceder
      </Typography>
      <Spacer vertical="l" />
      <Input
        size="big"
        placeholder="email"
        onChangeText={handleChange('email')}
        value={values.email}
      />
      <Spacer vertical="m" />
      <Input
        size="big"
        placeholder="contraseña"
        onChangeText={handleChange('password')}
        value={values.password}
      />
      <Spacer vertical="m" />
      <Button text="Acceder" onPress={handleSubmit} />
      <Spacer vertical="m" />
      <OtherActionsContainer>
        <Typography>¿Todavía tienes una cuenta? </Typography>
        <Typography color="active" onPress={handleGoToSigninScreen}>
          Registrate
        </Typography>
      </OtherActionsContainer>

      {isLoading && <Loading />}
    </SigninContainer>
  )
}
