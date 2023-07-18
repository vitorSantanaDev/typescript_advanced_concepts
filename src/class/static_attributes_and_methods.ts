export class User {
	static defaultUsername = 'defautl username'
	static defaultUserPhoto = 'default user photo'

	constructor(public username: string, public userPhoto: string) {}

	static createDefaultUser() {
		return new User(this.defaultUsername, this.defaultUserPhoto)
	}

	public sayHey() {
		return `Hey, my name is ${this.username}`
	}
}

const defaultUser = User.createDefaultUser()
const person = new User('Vitor', 'http://photo.example.user')

console.log(defaultUser)
console.log(person)

console.log(defaultUser.sayHey())
console.log(person.sayHey())
