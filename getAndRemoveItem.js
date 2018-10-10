"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAdjacentAt_1 = require("@writetome51/array-get-and-remove-adjacent-at/getAndRemoveAdjacentAt");
// index can be negative or positive.
function getAndRemoveItem(index, array) {
    return getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(index, 1, array)[0];
}
exports.getAndRemoveItem = getAndRemoveItem;
