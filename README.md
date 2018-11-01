To include in your project:

import {getAndRemoveByIndex} from '@writetome51/array-get-and-remove-by-index';

getAndRemoveByIndex(index, array): any

This function removes a requested item (accessed by its index) from the array and returns it.
The index can be positive or negative.

Example:

let arr = [-2, 1, 3, 4, 5];

let thirdItem = getAndRemoveByIndex(2, arr);

thirdItem is now 3.


let secondToLastItem = getAndRemoveByIndex(-2, arr);

secondToLastItem is now 4.
