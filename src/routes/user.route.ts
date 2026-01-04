import { Router } from 'express'
import type { UserControllerI } from '../controllers/user.controller'

export const createUserRouter = (usrCtrl: UserControllerI): Router => {
  const UserRouter = Router()
  UserRouter.get('/:id/pacients', usrCtrl.getPatients)
  UserRouter.get('/', usrCtrl.getAll)
  UserRouter.get('/:id', usrCtrl.getById)
  return UserRouter
}
