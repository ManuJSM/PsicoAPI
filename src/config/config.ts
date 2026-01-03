import dotenv from 'dotenv'
dotenv.config()

export const {
  PORT = 3000,
  NODE_ENV = 'development',
  DB_NAME,
  DB_HOST,
  DB_PASS,
  DB_PORT,
  DB_USER,
  DB_SCHEMA,
  DB_URL
} = process.env
