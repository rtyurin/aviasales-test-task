/**
 * make all values in object false
 * @param obj {Object}
 * @returns {Object}
 */
const makeAllValuesFalse = (obj = {}) => {
    return Object.keys(obj).reduce((acc, i) => {
        acc[i] = obj[i] ? !obj[i] : obj[i]

        return acc
    }, {})
}

export default makeAllValuesFalse
