import { type PrismaClient } from '../../generated/prisma/client'

class DbConn {
  private readonly client

  constructor (client: PrismaClient) {
    this.client = client
  }

  public getClient (): PrismaClient {
    return this.client
  }
}

export { DbConn }
