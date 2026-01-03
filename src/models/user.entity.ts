import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm'
import { Role } from '../types/user.types.d'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ unique: true })
    email!: string

  @Column()
    fullName!: string

  @Column()
    phone!: string

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER
  })
    role!: Role

  @Column()
    password!: string

  @CreateDateColumn()
    createdAt!: Date

  @ManyToOne(() => User, (user) => user.pacientes, {
    nullable: true,
    onDelete: 'SET NULL'
  })
    psico?: User

  @OneToMany(() => User, (user) => user.psico)
    pacientes!: User[]
}
