const DEFAULT_LOCALE = 'es-ES'

export default function useIntl() {
  const formatDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString(DEFAULT_LOCALE)
    return formattedDate
  }
  const formatStringDate = (stringDate: string) => {
    const date = getDateFromString(stringDate)
    const formattedDate = formatDate(date)
    return formattedDate
  }
  const getDateFromString = (stringDate: string) => {
    const date = new Date(stringDate)
    return date
  }
  const getStringFromDate = (date: Date) => {
    const stringDate = date.toISOString()
    return stringDate
  }

  return {
    formatDate,
    getDateFromString,
    getStringFromDate,
    formatStringDate
  }
}
