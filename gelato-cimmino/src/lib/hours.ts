export type DayHours = { day: string; open: string; close: string }

export const WEEK_HOURS: DayHours[] = [
  { day: 'Monday',    open: '10:00 AM', close: '9:00 PM' },
  { day: 'Tuesday',   open: '10:00 AM', close: '9:00 PM' },
  { day: 'Wednesday', open: '10:00 AM', close: '9:00 PM' },
  { day: 'Thursday',  open: '10:00 AM', close: '10:00 PM' },
  { day: 'Friday',    open: '10:00 AM', close: '10:00 PM' },
  { day: 'Saturday',  open: '10:00 AM', close: '10:00 PM' },
  { day: 'Sunday',    open: '10:00 AM', close: '9:00 PM' },
]

export function getTodayHours(): DayHours {
  const todayIndex = (new Date().getDay() + 6) % 7
  return WEEK_HOURS[todayIndex]
}
