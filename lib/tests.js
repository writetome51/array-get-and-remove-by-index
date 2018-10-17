"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveItem_1 = require("./getAndRemoveItem");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1
var removedItem = getAndRemoveItem_1.getAndRemoveItem(-1, arr);
if (removedItem === 10)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2
if (arr.length === 9 && arr[8] === 9)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removedItem = getAndRemoveItem_1.getAndRemoveItem(0, arr);
if (removedItem === 1)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
if (arr.length === 9 && arr[0] === 2)
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removedItem = getAndRemoveItem_1.getAndRemoveItem(-10, arr);
if (removedItem === 1)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6
if (arr.length === 9 && arr[0] === 2)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7
arr = [1, 2, 3, 4, ['ooo'], 6, 7, 8, 9, 10];
removedItem = getAndRemoveItem_1.getAndRemoveItem(4, arr);
if (Array.isArray(removedItem) && removedItem[0] === 'ooo')
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8
if (arr.length === 9 && arr[4] === 6)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9
var errorTriggered = false;
try {
    getAndRemoveItem_1.getAndRemoveItem(10, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 failed');
// Test 10
errorTriggered = false;
try {
    getAndRemoveItem_1.getAndRemoveItem(-10, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 10 passed');
else
    console.log('test 10 failed');
// Test 11
errorTriggered = false;
try {
    getAndRemoveItem_1.getAndRemoveItem(0, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 11 passed');
else
    console.log('test 11 failed');
