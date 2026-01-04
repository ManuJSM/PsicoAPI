import type { UserServiceI } from '../services/user.service'
import type { Request, Response } from 'express'
import { http } from '../types/httpSC.types.d'

export interface UserControllerI {
  getAll: (req: Request, res: Response) => Promise<Response>
  getById: (req: Request, res: Response) => Promise<Response>
  getPatients: (req: Request, res: Response) => Promise<Response>
}

export class UserController implements UserControllerI {
  constructor (private readonly usrService: UserServiceI) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this.usrService.getAll()
    return res.status(http.FOUND).json(users)
  }

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params['id'])
    if (Number.isNaN(id) || id <= 0) {
      return res.sendStatus(http.BAD_REQUEST)
    }
    const user = await this.usrService.getById(id)
    if (user === null) {
      return res.sendStatus(http.NOT_FOUND)
    }
    return res.status(http.FOUND).json(user)
  }

  public getPatients = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params['id'])
    if (Number.isNaN(id) || id <= 0) {
      return res.sendStatus(http.BAD_REQUEST)
    }
    const users = await this.usrService.getPatients(id)
    if (users.length === 0) {
      return res.sendStatus(http.NOT_FOUND)
    }
    return res.status(http.FOUND).json(users)
  }
}
