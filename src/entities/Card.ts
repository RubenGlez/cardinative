import { Company } from './Company'
import { Promotion } from './Promotion'
import { User } from './User'

export interface Card {
  id: string
  owner: User['id']
  company: Company['id']
  name: string
  color?: string
  logo?: string
  description?: string
}

export interface CardExtended extends Card {
  promotions: Promotion[]
}
