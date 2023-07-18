export class Database {
	private static database: Database
	private constructor(
		private host: string,
		private user: string,
		private password: string,
	) {}

	connect(): void {
		console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`)
	}

	static createDatabase(
		host: string,
		user: string,
		password: string,
	): Database {
		if (Database.database) {
			console.log(
				'%cRetornando instância já criada',
				'background: #4e1; color: #1b1b1b;',
			)
			return Database.database
		}
		console.log(
			'%cCriando nova instância',
			'background: #ffee11; color: #1b1b1b;',
		)
		Database.database = new Database(host, user, password)
		return Database.database
	}
}

const db1 = Database.createDatabase('localhost', 'root', '1234')
db1.connect()

const db2 = Database.createDatabase('localhost', 'root', '4321')
db2.connect()

const db3 = Database.createDatabase('localhost', 'root', '4321')
db3.connect()

const db4 = Database.createDatabase('localhost', 'root', '4321')
db4.connect()
