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

export { RegEntryView, RegEntryModel }
