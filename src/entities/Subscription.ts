import { Card } from './Card'
import { Company } from './Company'
import { Promotion } from './Promotion'
import { User } from './User'

export interface SubscriptionStep {
  id: string
  date: Date
}

export enum SubscriptionStatus {
  inprogress = 'inprogress',
  completed = 'completed'
}

export interface Subscription {
  id: string
  subscriptor: User['id']
  owner: User['id']
  promotion: Promotion['id']
  card: Card['id']
  company: Company['id']
  steps: SubscriptionStep[]
  status: SubscriptionStatus
  createdAt?: Date
  updatedAt?: Date
}
