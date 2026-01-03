import type { UserServiceI } from '../services/user.service'
import type { Request, Response } from 'express'

export interface UserControllerI {
  getAll: (req: Request, res: Response) => Promise<Response>

}

export class UserController implements UserControllerI {
  constructor (private readonly usrService: UserServiceI) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this.usrService.getAll()
    return res.json({ data: users })
  }
}
