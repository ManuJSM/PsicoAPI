import winston from 'winston'
import { Config } from './config'
const isProd = Config.NODE_ENV === 'production'

class Logger {
  private static instance: Logger
  private readonly logger: winston.Logger

  private constructor () {
    this.logger = winston.createLogger({
      level: isProd ? 'info' : 'debug',
      format: isProd
        ? winston.format.json()
        : winston.format.combine(
          winston.format.colorize(),
          winston.format.timestamp(),
          winston.format.printf((info: winston.Logform.TransformableInfo) => {
            const { timestamp, level, message } = info
            return `${timestamp as string} [${level}]: ${message as string}`
          })
        ),

      transports: [new winston.transports.Console()]
    })
  }

  public static getInstance (): Logger {
    if (Logger.instance === undefined) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public info (message: string): void {
    this.logger.info(message)
  }

  public debug (message: string): void {
    this.logger.debug(message)
  }

  public warn (message: string): void {
    this.logger.warn(message)
  }

  public error (message: string): void {
    this.logger.error(message)
  }
}

export const logger = Logger.getInstance()
