'use strict'

function isObject(currentValue) {
    const currentValueKeys = Object.keys(currentValue)
    return typeof currentValue === 'object' && Array.isArray(currentValueKeys) && currentValueKeys.length > 0
}

const flattenkeys = obj => {
    let flattened = []
    Object.keys(obj).forEach(key => {
        const currentValue = obj[key]
        if (isObject(currentValue)) {
            const internalKeys = flattenkeys(currentValue)
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
