This function removes the requested item from the array and returns it.
You access the item by its index.

Example:

let arr = [-2, 1, 3, 4, 5];

let thirdItem = getAndRemoveItem(2, arr);

thirdItem is now 3.

You can also use a negative index to access an item:

let secondToLastItem = getAndRemoveItem(-2, arr);

secondToLastItem is now 4.