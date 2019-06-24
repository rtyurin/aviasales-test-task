/**
 * convert date into ISO 8601 format
 * @param date
 * @returns {String}
 * @example
 * convertToDateStringFormat('12.05.18') // => "2018-05-12"
 */
const convertToDateStringFormat = (date = '') => {
    return date.replace(/(\d{2}).(\d{2}).(\d{2})/g, '20$3-$2-$1')
}

/**
 * get full date in DD mmm YYYY format in russian
 * @param date {String} - date in DD.MM.YY format
 * @returns {string} - formatted string in russian
 *
 * @example
 * getFullDate(12.05.2019) // => 12 мая 2019 г.
 */
const getFullDate = (date = '') => {
    const intDate = convertToDateStringFormat(date)
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    const fullDate = new Date(intDate)
        .toLocaleDateString('ru', options)
        .replace(/г*\./g, '')

    return fullDate
}

/**
 * get weekday in russian short version
 * @param date {String} - date in DD.MM.YY format
 * @returns {string} - formatted string in russian
 *
 * @example
 * getWeekday(12.05.2019) // => вс
 */
const getWeekday = (date = '') => {
    const intDate = convertToDateStringFormat(date)
    const options = { weekday: 'short' }
    const weekday = new Date(intDate).toLocaleDateString('ru', options)

    return weekday
}

export { getFullDate, getWeekday }
