import { DataSource } from 'typeorm'
import { Config } from './config'
import { User } from '../models/UserEntity'

const host = Config.DB_HOST
const pass = Config.DB_PASS
const port = Config.DB_PORT !== undefined ? parseInt(Config.DB_PORT, 10) : undefined

const dbName = Config.DB_NAME
const dbUser = Config.DB_USER

if (dbUser === undefined || host === undefined || port === undefined || pass === undefined || dbName === undefined) {
  throw new Error('Database .env conf Missing')
}

const posgreDb = new DataSource({
  type: 'postgres',
  host,
  port,
  username: dbUser,
  password: pass,
  database: dbName,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: []
})

class DbConn {
  private readonly client

  constructor (client: DataSource) {
    this.client = client
  }

  public getClient (): DataSource {
    return this.client
  }
}

export { DbConn, posgreDb }
