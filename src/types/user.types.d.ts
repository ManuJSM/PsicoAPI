export enum Role {
  PSICO = 'PSICO',
  USER = 'USER',
}

export interface UserViewDto {
  email: string
  fullName: string
  phone: string
  role: Role
  createdAt: Date
}

export interface UserCreateDto {
  email: string
  fullName: string
  phone: string
  password: string
}
