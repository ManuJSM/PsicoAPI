import type { Repository } from 'typeorm'
import { User } from '../models/user.entity'
import type { UserCreateDto, UserViewDto } from '../types/user.types'

export class UserService {
  constructor (private readonly db: Repository<User>) {}

  private toViewDto (user: User): UserViewDto {
    const { email, fullName, phone, role, createdAt } = user
    return { email, fullName, phone, role, createdAt }
  }

  private fromCreateDto (userDto: UserCreateDto): User {
    const user = new User()
    user.email = userDto.email
    user.fullName = userDto.fullName
    user.phone = userDto.phone
    return user
  }

  public async getAll (): Promise<UserViewDto[]> {
    const users = await this.db.find()
    return users.map(user => this.toViewDto(user))
  }

  public async getPacients (psicoId: number): Promise<UserViewDto[]> {
    const pacients = await this.db.find({ where: { psico: { id: psicoId } } })
    return pacients.map(user => this.toViewDto(user))
  }
}
