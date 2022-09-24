export function addingFn(a: unknown, b: unknown): unknown {
	return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} ${b}`
}

console.log(addingFn(10, 20))
console.log(addingFn('Vitor', 'Santana'))

type Person = { type: 'Person'; name: string }
type Animal = { type: 'Animal'; color: string }

type PersonOrAnimal = Person | Animal

export class Student implements Person {
	type = 'Person' as const
	constructor(public name: string) {}
}

export function showNameFn(object: PersonOrAnimal): void {
	// if ('name' in object) console.log(object.name)
	// if (object instanceof Student) console.log(object.name)
	switch (object.type) {
		case 'Animal': {
			console.log(`Isso é um animal ${object.color}`)
			break
		}
		case 'Person': {
			console.log(`Esta é uma pessoa com nome de ${object.name}`)
			break
		}
	}
}

showNameFn(new Student('Vitor Santana'))
showNameFn({ type: 'Animal', color: 'White' })
