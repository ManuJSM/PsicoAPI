import type { DataSource } from 'typeorm'
import { UserService, type UserServiceI } from './user.service'
import { User } from '../models/user.entity'

export interface ServicesRegistry {
  user: UserServiceI
}

export const createServicesRegistry = (db: DataSource): ServicesRegistry => {
  return {
    user: new UserService(db.getRepository(User))
  }
}
