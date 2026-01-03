import { UserRouter } from './user.route'
import { Router } from 'express'

export const appRouter = Router()

appRouter.use('/users', UserRouter)
