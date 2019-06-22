/**
 * Return plural number for Russian language
 *
 * @param {number} v number of objects
 * @return {number} 0, 1 or 2
 *
 * @example
 *
 *      plural(0) // => 2
 *      plural(1) // => 0
 *      plural(2) // => 1
 */
export default v => {
    const n = Math.abs(v)

    if (n % 10 === 1 && n % 100 !== 11) {
        return 0
    }

    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        return 1
    }

    return 2
}
