import { posgreDb } from '../src/config/db'
import { User } from '../src/models/user.entity'
import { UserService } from '../src/services/user.service'

const db = posgreDb

async function main (): Promise<void> {
  await db.initialize()
  const userRepo = db.getRepository(User)

  // const admin = userRepo.create({
  //   fullName: 'Admin',
  //   email: 'admin@psico.io',
  //   phone: '666',
  //   password: 'admin',
  //   role: Role.PSICO
  // })

  // await userRepo.save(admin)
  // console.log('Psicólogo creado:', admin.id, admin.fullName)

  // const paciente = userRepo.create({
  //   fullName: 'Pedrito',
  //   email: 'pedrito@psico.io',
  //   phone: '123456789',
  //   password: 'hashed_patient_password',
  //   psico: admin
  // })

  // await userRepo.save(paciente)
  // console.log('Paciente creado:', paciente.id, paciente.fullName, '-> Psicólogo:', paciente.psico?.fullName)

  // const adminConPacientes = await userRepo.findOne({
  //   where: { id: admin.id },
  //   relations: ['pacientes']
  // })
  const us = new UserService(userRepo)
  const users = await us.getPacients(1)

  console.log('All users:', users)
}

main()
  .then(async () => {
    await db.destroy()
  })
  .catch(async (e) => {
    console.error(e)
    await db.destroy()
    process.exit(1)
  })
