interface Person {
	readonly name: string
}

interface Person {
	readonly lastName: string
}

interface Person {
	address: readonly string[]
}

interface Person {
	age: number
}

const person: Person = {
	age: 22,
	name: 'Vitor',
	lastName: 'Santana',
	address: ['Old street', 'New street'],
}

console.log(person)
