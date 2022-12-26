export interface User {
  id?: string
  email: string
  password: string
  username?: string
  role: UserRole
  lastLoginAt?: string
  createdAt?: string
  updatedAt?: string
}

export enum UserRole {
  Basic = 'Basic',
  Business = 'Business',
  Admin = 'Admin'
}
