# getAndRemoveByIndex\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): T

Removes and returns 1 item (accessed by `index`) from `array`.  
The `index` can be negative or positive.

## Examples
```js
let arr = [10,20,30,40,50];

getAndRemoveByIndex(2, arr);  
// --> 30
// arr is now [10,20,40,50]

arr = [10,20,30,40,50];
getAndRemoveByIndex(-2, arr);  
// --> 40   
// arr is now [10,20,30,50]
```

## Installation
`npm i  @writetome51/array-get-and-remove-by-index`


## Loading
```js
import {getAndRemoveByIndex} from '@writetome51/array-get-and-remove-by-index';
```
