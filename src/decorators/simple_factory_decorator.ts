/* eslint-disable @typescript-eslint/no-explicit-any */
interface Constructor {
	new (...args: any[]): any
}

export function logger(prefix: string) {
	return (target: any) => {
		console.log(`${target}-${prefix}`)
	}
}

@logger('awesome')
export class Log {}

// Example 2
export function invertName(paramOne: string, paramTwo: string) {
	return function (target: Constructor): Constructor {
		console.log('I am decorator')

		return class extends target {
			name: string

			constructor(...args: any[]) {
				super(...args)
				this.name = this.invert(args[0])
			}

			invert(value: string) {
				return `${value.split('').reverse().join('')} ${paramOne} ${paramTwo}`
			}
		}
	}
}

export function anotherDecorator(paramOne: string) {
	return function (target: Constructor) {
		console.log('I am another decorator', { paramOne })
		return target
	}
}

@anotherDecorator('Test')
@invertName('Silva de', 'Santana')
export class Person {
	constructor(public name: string) {
		console.log('I am Class')
	}
}

const person = new Person('Vitor')
console.log({ person })
