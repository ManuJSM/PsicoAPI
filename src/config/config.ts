import dotenv from 'dotenv'
const NODE_ENV = process.env['NODE_ENV'] ?? 'development'

dotenv.config({
  path: NODE_ENV === 'development' ? '.env.local' : '.env'
})

export const Config = {
  PORT: process.env['PORT'] ?? '3000',
  NODE_ENV,
  DB_NAME: process.env['DB_NAME'],
  DB_HOST: process.env['DB_HOST'],
  DB_PASS: process.env['DB_PASS'],
  DB_PORT: process.env['DB_PORT'],
  DB_USER: process.env['DB_USER'],
  DB_SCHEMA: process.env['DATABASE_SCHEMA'],
  DB_URL: process.env['DATABASE_URL']
}
