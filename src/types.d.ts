// Sleep Entry types
interface RegEntryModel {
  id: number
  date: string
  startTime: string
  endTime: string
  patientComment?: string
  professionalNote?: string
}

interface RegEntryView extends RegEntryModel {
  durationHours: number
  targetHours: number
  efficiency: number
  hasNotification: boolean

}

// User types
interface User {
  id: number
  fullName: string
  email: string
  phone: string
  role: string
  password?: string
  createdAt: string
}

export { RegEntryView, RegEntryModel, User }
