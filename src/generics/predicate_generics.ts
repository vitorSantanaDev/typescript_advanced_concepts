export function isNumberFn(value: unknown): value is number {
	return typeof value === 'number'
}

console.log(isNumberFn(22))
console.log(isNumberFn('Vitor'))

export function sumFn<T>(...args: T[]): number {
	const totalValue = args.reduce((sum, value) => {
		if (isNumberFn(sum) && isNumberFn(value)) {
			return sum + value
		}
		return sum
	}, 0)
	return totalValue
}

console.log(sumFn(10, 10, 20))
console.log(sumFn(...[10, 10, 20, 'Vitor']))
console.log(sumFn('a', 'b', 'c'))
