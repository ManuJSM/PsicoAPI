import { DataSource } from 'typeorm'
import { DB_HOST, DB_PASS, DB_PORT, DB_NAME, DB_USER } from './config'
import { User } from '../models/user.entity'

const host = DB_HOST
const pass = DB_PASS
const port = DB_PORT !== undefined ? parseInt(DB_PORT, 10) : undefined
const dbName = DB_NAME
const dbUser = DB_USER

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
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: []
})

export { posgreDb }
