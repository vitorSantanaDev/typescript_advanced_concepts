function decorator(
	classPrototype: any,
	methodName: string,
	descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
	console.log({ classPrototype, methodName, descriptor })
	return {
		value: function (...args: string[]) {
			return args[0].toUpperCase()
		},
	}
}

export class Person {
	name: string
	lastName: string
	age: number

	constructor(name: string, lastName: string, age: number) {
		this.name = name
		this.lastName = lastName
		this.age = age
	}

	@decorator
	method(message: string): string {
		return `${this.name} ${this.lastName}: ${message}`
	}

	get fullName(): string {
		return `${this.name} ${this.lastName}`
	}

	set fullName(value: string) {
		const keywords = value.split(/\s+/g)
		const firstName = keywords.shift()

		if (!firstName) return
		this.name = firstName
		this.lastName = keywords.join(' ')
	}
}

const person = new Person('Vitor', 'Santana', 23)
const returnMethod = person.method('Olá mundo!')
console.log(returnMethod)
