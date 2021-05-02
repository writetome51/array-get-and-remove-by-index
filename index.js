import {getAndRemoveAdjacentAt} from '@writetome51/array-get-and-remove-adjacent-at';


// index can be negative or positive.

export function getAndRemoveByIndex(index, array) {
	return getAndRemoveAdjacentAt(index, 1, array)[0];
}
