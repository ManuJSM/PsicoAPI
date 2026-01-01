import express from 'express'
import { Config } from './config/config'
import Logger from './config/Logger'

const PORT = Config.PORT

const app = express()

app.listen(PORT, () => {
  Logger.getInstance().info(`Server running on port ${PORT}`)
})
