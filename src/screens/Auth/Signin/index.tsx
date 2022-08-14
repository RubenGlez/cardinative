import React, { useCallback } from 'react'
import { Input, Spacer, Typography, Loading } from '@/components'
import { OtherActionsContainer, SigninContainer } from './styles'
import Button from '@/components/Button'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'
import useSignInForm from '@/hooks/auth/useSignInForm'
import { AUTH_STACK, SIGNIN_SCREEN } from '@/navigation/constants'

export default function Signin() {
  const { isLoading, handleChange, handleSubmit, values } = useSignInForm()
  const { navigate } = useNavigation<RootNavigation>()
  const handleGoToSigninScreen = useCallback(() => {
    navigate(AUTH_STACK, {
      screen: SIGNIN_SCREEN
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
