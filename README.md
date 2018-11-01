This function removes a requested item from the array and returns it.
You access the item by its index. The index can be positive or negative.

Example:

let arr = [-2, 1, 3, 4, 5];

let thirdItem = getAndRemoveByIndex(2, arr);

thirdItem is now 3.

You can also use a negative index:

let secondToLastItem = getAndRemoveByIndex(-2, arr);

secondToLastItem is now 4.
