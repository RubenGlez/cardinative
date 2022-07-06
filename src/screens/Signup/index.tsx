import React, { useCallback } from 'react'
import { Input, Spacer, Typography, Loading } from '@/components'
import { OtherActionsContainer, SignupContainer } from './styles'
import Button from '@/components/Button'
import useSignupForm from '@/hooks/auth/useSignupForm'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'

export default function SignupScreen() {
  const { isLoading, handleChange, handleSubmit, values } = useSignupForm()
  const { navigate } = useNavigation<RootNavigation>()
  const handleGoToSigninScreen = useCallback(() => {
    navigate('AuthStack', {
      screen: 'SigninScreen'
    })
  }, [navigate])

  return (
    <SignupContainer>
      <Typography size="xl" align="center">
        Crea una cuenta
      </Typography>
      <Spacer vertical="l" />
      <Input
        size="big"
        placeholder="usuario"
        onChangeText={handleChange('username')}
        value={values.username}
      />
      <Spacer vertical="m" />
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
      <Button text="Registrarte" onPress={handleSubmit} />
      <Spacer vertical="m" />
      <OtherActionsContainer>
        <Typography>¿Ya tienes una cuenta? </Typography>
        <Typography color="active" onPress={handleGoToSigninScreen}>
          Accede
        </Typography>
      </OtherActionsContainer>

      {isLoading && <Loading />}
    </SignupContainer>
  )
}
