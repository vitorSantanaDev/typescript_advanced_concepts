interface IUserModelGeneric<T = string, N = number, D = Date> {
	username: T
	lasName: T
	userAge: N
	birthday: D
}

const user: IUserModelGeneric<string, number, Date> = {
	username: 'Vitor Silva',
	lasName: 'Santana',
	birthday: new Date(),
	userAge: 22,
}

const userTow: IUserModelGeneric<string, string, string> = {
	userAge: '22',
	username: 'Cassia Maria',
	lasName: 'Araujo',
	birthday: new Date().toLocaleDateString(),
}

console.log({ user })
console.log({ userTow })
