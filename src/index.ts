function isObject(mayBeObject: any) {
    const keys = Object.keys(mayBeObject);
    return typeof mayBeObject === 'object' && Array.isArray(keys) && keys.length > 0;
}

const flattenkeys = (obj: any) => {
    let flattened: any[] = [];
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (isObject(value)) {
            const internalKeys = flattenkeys(value);
            internalKeys.forEach(internalKey => {
                flattened.push(`${key}.${internalKey}`);
            });
        } else {
            flattened.push(key);
        }
    });
    return flattened;
};

export {flattenkeys};
