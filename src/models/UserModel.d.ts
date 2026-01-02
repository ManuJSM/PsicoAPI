import { Prisma, Role } from '../../generated/prisma/client'
import type { User } from '../../generated/prisma/client'

type UserModel = User
type UserInputDTO = Prisma.UserCreateInput

export type{
  UserModel, UserInputDTO, Role
}
