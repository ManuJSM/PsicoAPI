import { posgreDb } from '../src/config/db'
import { User } from '../src/models/user.entity'
import { Role } from '../src/types/user.types.d'
const db = posgreDb

async function main (): Promise<void> {
  await db.initialize()
  const userRepo = db.getRepository(User)

  const admin = userRepo.create({
    fullName: 'Admin',
    email: 'admin@psico.io',
    phone: '666',
    password: 'admin',
    role: Role.PSICO
  })

  await userRepo.save(admin)
  console.log('Psicólogo creado:', admin.id, admin.fullName)

  const paciente = userRepo.create({
    fullName: 'Pedrito',
    email: 'pedrito@psico.io',
    phone: '123456789',
    password: 'hashed_patient_password',
    psico: admin
  })

  await userRepo.save(paciente)
  console.log('Paciente creado:', paciente.id, paciente.fullName, '-> Psicólogo:', paciente.psico?.fullName)
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
