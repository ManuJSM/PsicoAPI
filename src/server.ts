import express from 'express'
import { PORT } from './config/config'
import { logger } from './config/logger'
import { createAppRouter } from './routes/appRouter'
import { createControllerRegistry } from './controllers/controllers.reg'
import { createServicesRegistry } from './services/services.reg'
import { posgreDb } from './config/db'
import { http } from './types/httpSC.types.d'

await posgreDb.initialize().then(() => logger.info('bd iniciada'))

const servicesReg = createServicesRegistry(posgreDb)
const controllersReg = createControllerRegistry(servicesReg)
const appRouter = createAppRouter(controllersReg)

const app = express()
app.disable('x-powered-by')

app.use(appRouter)

// TODO hacer un middleware para loggear los errores filtrando cada tipo de error
app.use((err, _req, res, _next) => {
  logger.error(err.stack)
  res.status(http.INTERNAL_SERVER_ERROR).send('Something broke!')
})

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
