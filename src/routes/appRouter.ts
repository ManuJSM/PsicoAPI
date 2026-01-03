import type { ControllersRegistry } from '../controllers/controllers.reg'
import { createUserRouter } from './user.route'
import { Router } from 'express'

export const createAppRouter = (controllerReg: ControllersRegistry): Router => {
  const AppRouter = Router()
  const usrRtr = createUserRouter(controllerReg.user)

  AppRouter.use('/users', usrRtr)
  return AppRouter
}
