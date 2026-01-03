
import type { ServicesRegistry } from '../services/services.reg'
import { UserController, type UserControllerI } from './user.controller'

export interface ControllersRegistry {
  user: UserControllerI
}

export const createControllerRegistry = (serviceRegistry: ServicesRegistry): ControllersRegistry => {
  return {
    user: new UserController(serviceRegistry.user)
  }
}
