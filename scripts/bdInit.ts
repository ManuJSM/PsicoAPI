import prismaConfig from '../prisma.config'
import { UserRepository } from '../src/repositories/UserRepository'
import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { DbConn } from '../src/config/db'

// const user1: Prisma.UserCreateInput = {
//   fullName: 'Admin',
//   email: 'admin@psico.io',
//   phone: '999999',
//   password: 'admin',
//   role: Role.PSICO
// }
const connectionString = prismaConfig.datasource?.url
console.log('Database URL:', connectionString)

const adapter = new PrismaPg({ connectionString })
const clientPosgre = new PrismaClient({ adapter })
const db = new DbConn(clientPosgre)
const userR = new UserRepository(db)

async function main (): Promise<void> {
  const users = await userR.getAll()

  // const admin: User = await db.user.create({
  //   data: user1
  // })

  // }
  // const pedrito: User = await db.user.create({
  //   data: user2
  // })
  console.log('Created users:', users)
}

main()
  .then(async () => {
    await db.getClient().$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.getClient().$disconnect()
    process.exit(1)
  })
