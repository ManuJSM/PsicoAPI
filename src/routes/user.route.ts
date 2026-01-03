import { Router } from 'express'
import type { UserControllerI } from '../controllers/user.controller'

export const createUserRouter = (usrCtrl: UserControllerI): Router => {
  const UserRouter = Router()
  UserRouter.get('/', usrCtrl.getAll)
  return UserRouter
}
