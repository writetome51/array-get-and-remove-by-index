"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_adjacent_at_1 = require("@writetome51/array-get-and-remove-adjacent-at");
// index can be negative or positive.
function getAndRemoveByIndex(index, array) {
    return array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(index, 1, array)[0];
}
exports.getAndRemoveByIndex = getAndRemoveByIndex;
