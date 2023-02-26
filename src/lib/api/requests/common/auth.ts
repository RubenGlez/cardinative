import { Auth, User } from '@/entities'
import apiClient from '../../apiClient'

export type SignUpInputData = Pick<
  User,
  'email' | 'password' | 'username' | 'role'
>
export type SignInInputData = Pick<User, 'email' | 'password'>

export function signupRequest(inputData: SignUpInputData) {
  return apiClient.post<SignUpInputData, Auth>('/common/auth/signup', inputData)
}

export function signinRequest(inputData: SignInInputData) {
  return apiClient.post<SignInInputData, Auth>('/common/auth/signin', inputData)
}
