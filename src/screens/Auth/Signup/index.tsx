import React, { useCallback } from 'react'
import { Input, Spacer, Typography, Loading, Switch } from '@/components'
import { OtherActionsContainer, SignupContainer } from './styles'
import Button from '@/components/Button'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'
import useSignUpForm from '@/hooks/auth/useSignUpForm'
import { UserRole } from '@/entities'
import { AUTH_STACK, SIGNIN_SCREEN } from '@/navigation/constants'

export default function Signup() {
  const {
    isLoading,
    handleChange,
    handleSubmit,
    values,
    handleChangeUserRole
  } = useSignUpForm()
  const { navigate } = useNavigation<RootNavigation>()
  const handleGoToSigninScreen = useCallback(() => {
    navigate(AUTH_STACK, {
      screen: SIGNIN_SCREEN
    })
  }, [navigate])
  const isBusiness = values.role === UserRole.Business

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
      <Switch
        label="¿Crear cuenta de empresa?"
        value={isBusiness}
        onValueChange={handleChangeUserRole}
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
