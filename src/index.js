'use strict'

function isObject(mayBeObject) {
    const keys = Object.keys(mayBeObject)
    return typeof mayBeObject === 'object' && Array.isArray(keys) && keys.length > 0
}

const flattenkeys = obj => {
    let flattened = []
    Object.keys(obj).forEach(key => {
        const value = obj[key]
        if (isObject(value)) {
            const internalKeys = flattenkeys(value)
            internalKeys.forEach(internalKey => {
                flattened.push(`${key}.${internalKey}`)
            })
        } else {
            flattened.push(key)
        }
    })
    return flattened
}

module.exports = flattenkeys
