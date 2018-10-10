import { getAndRemoveAdjacentAt }
	from '@writetome51/array-get-and-remove-adjacent-at/getAndRemoveAdjacentAt';


// index can be negative or positive.

export function getAndRemoveItem(index, array): any {
	return getAndRemoveAdjacentAt(index, 1, array)[0];
}
