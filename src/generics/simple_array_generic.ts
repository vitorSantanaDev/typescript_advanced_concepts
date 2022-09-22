interface FilterCallbackFnType<T> {
	(value: T, index?: number, array?: T): boolean
}

export function myFilterFn<T>(
	array: T[],
	callbackFn: FilterCallbackFnType<T>,
): T[] {
	const newArray = []
	for (let item = 0; item < array.length; item++) {
		if (callbackFn(array[item])) {
			newArray.push(array[item])
		}
	}
	return newArray
}

const arrayOfTheNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredArrayWithOriginalJSFunction = arrayOfTheNumbers.filter(
	(item) => item >= 5,
)

const filteredArraWithMyFnFilter = myFilterFn(
	arrayOfTheNumbers,
	(item) => item >= 5,
)

console.log({ filteredArrayWithOriginalJSFunction })
console.log({ filteredArraWithMyFnFilter })
