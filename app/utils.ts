type DateType = {
  date: string
  time?: string
}

const transformDate = (item: DateType) => new Date(
  `${item.date}T${item.time ?? '00:00'}:00`
)

export const sortDates = <T extends DateType>(
  events: T[],
  direction: 'ASC' | 'DESC' = 'ASC'
): T[] => {
  return [...events].sort((a, b) => {
    const aDate = `${a.date} ${a.time ?? ''}`
    const bDate = `${b.date} ${b.time ?? ''}`
    const result = aDate.localeCompare(bDate, 'de-DE')
    return direction === 'DESC' ? -result : result
  })
}

export const filterDates = <T extends DateType>(
  items: T[],
  date?: DateType
): T[] => items.filter(item => transformDate(item) >= (date ? transformDate(date) : Date.now()))

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(`${date}T12:00:00`))

export const formatDateToDay = (date: string) => new Intl.DateTimeFormat('de-DE', {
  day: '2-digit'
}).format(new Date(`${date}T12:00:00`))

export const formatDateToMonth = (date: string) => new Intl.DateTimeFormat('de-DE', {
  month: 'short'
})
  .format(new Date(`${date}T12:00:00`))
  .replace('.', '')
  .toUpperCase()
