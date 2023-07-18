export abstract class IAuthenticator {
	abstract authenticate(username: string, password: string): boolean
}

export class Authenticator extends IAuthenticator {
	authenticate(username: string, password: string): boolean {
		console.log(
			`Fazendo login com: username: ${username} e password: ${password}`,
		)
		return true
	}
}

export abstract class IUserRepository {
	abstract saveUserAuthenticated(username: string): void
}

export class UserRepository extends IUserRepository {
	saveUserAuthenticated(username: string): void {
		console.log(`Salvando ${username} na base de dados`)
	}
}

export class AuthController {
	constructor(
		private authenticator: IAuthenticator,
		private userRepository: IUserRepository,
	) {}

	login(username: string, password: string) {
		if (this.authenticator.authenticate(username, password)) {
			this.userRepository.saveUserAuthenticated(username)
			return true
		} else return false
	}
}

const authenticator = new Authenticator()
const userRepository = new UserRepository()

const authController = new AuthController(authenticator, userRepository)

const userCredentials = { username: 'vsantana', password: '123' }

authController.login(userCredentials.username, userCredentials.password)
