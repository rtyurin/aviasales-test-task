/**
 * checks if all of the values in object are true
 * @param obj
 * @returns {boolean}
 */
const isAllTrue = (obj = {}) => {
    return Object.keys(obj).every(k => obj[k])
}

export default isAllTrue
