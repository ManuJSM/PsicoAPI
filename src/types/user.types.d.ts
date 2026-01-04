import type { User } from '../models/user.entity'

export enum Role {
  PSICO = 'PSICO',
  USER = 'USER',
}
export type UserPacientsDto = Pick<User, 'id' | 'active' | 'fullName' | 'email' | 'phone'>

export type UserViewDto = Pick<User, 'id' | 'active' | 'fullName' | 'email' | 'phone' | 'role' | 'createdAt'>

export type UserCreateDto = Pick<User, 'fullName' | 'email' | 'phone' | 'password'>
