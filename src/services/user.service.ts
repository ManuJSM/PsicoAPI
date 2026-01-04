import type { Repository } from 'typeorm'
import { User } from '../models/user.entity'
import type { UserCreateDto, UserViewDto } from '../types/user.types'

export interface UserServiceI {
  getAll: () => Promise<UserViewDto[]>
  getPatients: (psicoId: number) => Promise<UserViewDto[]>
  getById: (id: number) => Promise<UserViewDto | null>

}

export class UserService implements UserServiceI {
  constructor (private readonly db: Repository<User>) {}

  private toViewDto (user: User): UserViewDto {
    const { id, active, email, fullName, phone, role, createdAt } = user
    return { id, active, email, fullName, phone, role, createdAt }
  }

  private fromCreateDto (userDto: UserCreateDto): User {
    const user = new User()
    user.email = userDto.email
    user.fullName = userDto.fullName
    user.phone = userDto.phone
    return user
  }

  public getAll = async (): Promise<UserViewDto[]> => {
    const users = await this.db.find()
    return users.map(user => this.toViewDto(user))
  }

  public getById = async (id: number): Promise<UserViewDto | null> => {
    const user = await this.db.findOneBy({ id })
    return user != null ? this.toViewDto(user) : null
  }

  public getPatients = async (psicoId: number): Promise<UserViewDto[]> => {
    const pacients = await this.db.find({ where: { psico: { id: psicoId } } })
    return pacients.map(user => this.toViewDto(user))
  }
}
