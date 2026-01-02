import type { UserModel } from '../models/UserModel'
import { DbConn } from '../config/db'

export class UserRepository {
  private readonly db
  constructor (db: DbConn) {
    this.db = db
  }

  public async getAll (): Promise<UserModel[]> {
    const users = await this.db.getClient().user.findMany()
    return users
  }
}
