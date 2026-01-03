import express from 'express'
import { Config } from './config/config'
import { logger } from './config/logger'

const PORT = Config.PORT

const app = express()

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
