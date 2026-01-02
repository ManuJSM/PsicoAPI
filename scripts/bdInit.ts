import { DbConn, posgreDb } from '../src/config/db'
import { User, Role } from '../src/models/UserEntity'

const db = new DbConn(posgreDb)
// const userR = new UserRepository(db)

async function main (): Promise<void> {
  await db.getClient().initialize()
  const userRepo = db.getClient().getRepository(User)

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

  const adminConPacientes = await userRepo.findOne({
    where: { id: admin.id },
    relations: ['pacientes']
  })

  console.log('Pacientes de admin:', adminConPacientes)
  console.log('Created users:')
}

main()
  .then(async () => {
    await db.getClient().destroy()
  })
  .catch(async (e) => {
    console.error(e)
    await db.getClient().destroy()
    process.exit(1)
  })
