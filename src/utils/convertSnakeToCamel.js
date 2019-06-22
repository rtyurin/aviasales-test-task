const isObject = obj => {
    const type = typeof obj

    return (
        type === 'function' ||
        (type === 'object' && !!obj && !(obj instanceof Array))
    )
}

const toCamel = s => {
    return s.replace(/([-_][a-z])/gi, $1 => {
        return $1
            .toUpperCase()
            .replace('-', '')
            .replace('_', '')
    })
}

/**
 * A simple function created for converting snake_case object keys to the traditional
 * javascript camelCase object keys
 * @param o {Object|Object[]}
 * @returns {Object|Object[]} - a converted object or a list of an objects
 */
const convertSnakeToCamel = o => {
    if (isObject(o)) {
        const n = {}

        Object.keys(o).forEach(k => {
            n[toCamel(k)] = convertSnakeToCamel(o[k])
        })

        return n
    }
    if (Array.isArray(o)) {
        return o.map(i => {
            return convertSnakeToCamel(i)
        })
    }

    return o
}

export default convertSnakeToCamel
