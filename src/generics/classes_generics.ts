export class Person<N, A> {
	constructor(public name: N, public age: A) {}
}

const newPerson = new Person<string, number>('Vitor Santana', 20)
console.log({ newPerson })

export class Stack<T> {
	private count = 0
	private elements: { [key: number]: T } = {}

	private isEmpty(): boolean {
		return this.count === 0
	}

	public push(element: T): void {
		this.elements[this.count] = element
		this.count++
	}

	public pop(): T | void {
		if (this.isEmpty()) return undefined

		this.count--
		const elementDeleted = this.elements[this.count]

		delete this.elements[this.count]
		return elementDeleted
	}

	public length(): number {
		return this.count
	}

	public showStack(): void {
		for (const key in this.elements) {
			console.log(this.elements[key])
		}
	}
}

const stack = new Stack<number>()

stack.push(1)
stack.push(2)
stack.push(3)
stack.showStack()

const element = stack.pop()
console.log({ element })
