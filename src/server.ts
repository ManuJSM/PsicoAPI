import express from 'express'
import { PORT } from './config/config'
import { logger } from './config/logger'
import { createAppRouter } from './routes/appRouter'
import { createControllerRegistry } from './controllers/controllers.reg'
import { createServicesRegistry } from './services/services.reg'
import { posgreDb } from './config/db'

await posgreDb.initialize().then(() => logger.info('bd iniciada'))

const servicesReg = createServicesRegistry(posgreDb)
const controllersReg = createControllerRegistry(servicesReg)
const appRouter = createAppRouter(controllersReg)

const app = express()

app.use(appRouter)

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
