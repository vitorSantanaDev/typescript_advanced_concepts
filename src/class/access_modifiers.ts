export class Person {
	// This access modifier gives us access to attributes and methods inside and outside the class
	public name: string

	// The readonly modifier inidicates that the property is read-only, we cannot change it value inside and outside the class
	public readonly age: number

	// The private modifier indicates that we cannot access the property in instances of the class or in child classes, allowing access only within the itself
	private cpf: number

	// It works the same way as the private modfier, but allowing child classes to have access to the property
	protected address: string

	constructor(name: string, age: number, cpf: number, address: string) {
		this.name = name
		this.age = age
		this.cpf = cpf
		this.address = address
	}
}
