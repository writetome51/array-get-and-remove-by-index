# getAndRemoveByIndex(index, array): any

Removes and returns an item (accessed by its `index`) from `array`.  
The `index` can be positive or negative.

## Examples
```
let arr = [-2, 1, 3, 4, 5];

let thirdItem = getAndRemoveByIndex(2, arr);  
// thirdItem is now 3.  
// arr is now [-2,1,4,5]

arr = [-2, 1, 3, 4, 5];
let secondToLastItem = getAndRemoveByIndex(-2, arr);  
secondToLastItem is now 4.   
arr is now [-2,1,3,5]
```

## Installation
`npm i  @writetome51/array-get-and-remove-by-index`


## Loading
```
import {getAndRemoveByIndex} from '@writetome51/array-get-and-remove-by-index';
```