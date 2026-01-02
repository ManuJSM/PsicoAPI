import dotenv from 'dotenv'
const NODE_ENV = process.env['NODE_ENV'] ?? 'development'

dotenv.config({
  path: NODE_ENV === 'development' ? '.env.local' : '.env'
})

export const Config = {
  PORT: process.env['PORT'] ?? '3000',
  NODE_ENV,
  DATABASE_SCHEMA: process.env['DATABASE_SCHEMA'],
  DATABASE_URL: process.env['DATABASE_URL']
}
