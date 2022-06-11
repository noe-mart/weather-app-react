const getDateString = (date = '') => {
  const [, , dayNumbre] = date.split('-')
  const options = {
    weekday: 'long',
  }
  const dateString = new Date()
  dateString.setDate(dayNumbre)
  const day = dateString
    .toLocaleDateString('es-US', options)
    .toLocaleUpperCase()
  return day
}

export { getDateString }
