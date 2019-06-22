/**
 * A simple utility for adding leading zero to time in HH:mm format
 * @param time {String} - time in HH:mm format
 * @returns {String}
 *
 * @example
 * addLeadingZero('1:21') // => '01:21'
 * addLeadingZero('19:21') // => '19:21'
 */
const addLeadingZero = (time = '') => time.replace(/^[\d]{1}:[\d]+/, '0$&')

export default addLeadingZero
