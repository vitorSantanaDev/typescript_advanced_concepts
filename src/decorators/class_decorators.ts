@decorator
export class Animal {
	constructor(public name: string, public color: string) {}
}

export function decorator<T extends new (...args: any[]) => any>(target: T): T {
	return class extends target {
		color: string
		name: string

		constructor(...args: any[]) {
			super(...args)
			this.name = this.reverseMethod(args[0])
			this.color = this.reverseMethod(args[1])
		}
		reverseMethod(value: string): string {
			return value.split('').reverse().join('')
		}
	}
}

const animal = new Animal('Bob', 'White')
console.log(animal)

export function setAPIVersion(apiVersion: string) {
	return (contructor: any) => {
		return class extends contructor {
			version = apiVersion
		}
	}
}

@setAPIVersion('1.0.0')
export class API {}
