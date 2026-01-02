import { DbConn } from '../config/db'

// TODO Wrapper of TypeORM repository?
export class UserRepository {
  private readonly db
  constructor (db: DbConn) {
    this.db = db
  }

  // public async getAll (): Promise<UserModel[]> {
  //   const users = await this.db.getClient()
  //   return users
  // }
}
