"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenkeys = void 0;
function isObject(mayBeObject) {
    var keys = Object.keys(mayBeObject);
    return typeof mayBeObject === 'object' && Array.isArray(keys) && keys.length > 0;
}
var flattenkeys = function (obj) {
    var flattened = [];
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        if (isObject(value)) {
            var internalKeys = flattenkeys(value);
            internalKeys.forEach(function (internalKey) {
                flattened.push(key + "." + internalKey);
            });
        }
        else {
            flattened.push(key);
        }
    });
    return flattened;
};
exports.flattenkeys = flattenkeys;
//# sourceMappingURL=index.js.map