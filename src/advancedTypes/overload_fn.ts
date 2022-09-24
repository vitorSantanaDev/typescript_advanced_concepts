type Adder = {
	(x: number): number
	(x: number, y: number): number
	(...args: number[]): number
}

export const adderFn: Adder = (x: number, y?: number, ...args: number[]) => {
	if (args.length > 0) {
		return args.reduce((acc, value) => (acc += value), 0) + x + (y || 0)
	}
	return x + (y || 0)
}

console.log(adderFn(10))
console.log(adderFn(10, 20))
console.log(adderFn(10, 20, 10))
