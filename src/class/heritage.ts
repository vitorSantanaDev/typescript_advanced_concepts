export class Person {
	constructor(
		public name: string,
		public lastName: string,
		private age: number,
		protected cpf: string,
	) {}

	public getAge(): number {
		return this.age
	}

	public getCpf(): string {
		return this.cpf
	}

	public getFullName(): string {
		return this.name + ' ' + this.lastName
	}
}

export class Aluno extends Person {
	public classroom: number
	constructor(
		name: string,
		lastName: string,
		age: number,
		cpf: string,
		classroom: number,
	) {
		super(name, lastName, age, cpf)
		this.classroom = classroom
	}

	public getFullName(): string {
		console.log('Algo antes')
		return super.getFullName()
	}
}

const aluno = new Aluno('Vitor Santana', 'Silva', 24, '111.111.111-09', 100)
console.log(aluno.getFullName())
console.log(aluno)
