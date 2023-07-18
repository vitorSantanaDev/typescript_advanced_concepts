export class Person {
	private _email = ''

	constructor(public name: string, public age: number) {}

	set email(email: string) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			throw new Error('Envalid email')
		}
		this._email = email
	}

	get email() {
		return this._email.trim()
	}
}

const person = new Person('Vitor', 24)
person.email = 'vitor@gmail.com'
console.log(person)
