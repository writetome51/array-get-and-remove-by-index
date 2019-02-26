"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1
var removedItem = index_1.getAndRemoveByIndex(-1, arr);
if (removedItem === 10)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
if (arr.length === 9 && arr[8] === 9)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removedItem = index_1.getAndRemoveByIndex(0, arr);
if (removedItem === 1)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
if (arr.length === 9 && arr[0] === 2)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removedItem = index_1.getAndRemoveByIndex(-10, arr);
if (removedItem === 1)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6
if (arr.length === 9 && arr[0] === 2)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7
arr = [1, 2, 3, 4, ['ooo'], 6, 7, 8, 9, 10];
removedItem = index_1.getAndRemoveByIndex(4, arr);
if (Array.isArray(removedItem) && removedItem[0] === 'ooo')
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8
if (arr.length === 9 && arr[4] === 6)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9
var errorTriggered = false;
try {
    index_1.getAndRemoveByIndex(10, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10
errorTriggered = false;
try {
    index_1.getAndRemoveByIndex(-10, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11
errorTriggered = false;
try {
    index_1.getAndRemoveByIndex(0, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
