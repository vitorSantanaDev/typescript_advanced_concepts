export class Collaborator {
	constructor(public readonly name: string, public readonly lastName: string) {}
}

export class Company {
	private collaborators: Collaborator[] = []
	constructor(public readonly name: string, protected readonly cnpj: string) {}

	public addCollaborator(collaborator: Collaborator): void {
		this.collaborators.push(collaborator)
	}

	public showCollaborators(): void {
		for (const collaborator of this.collaborators) {
			console.log(collaborator)
		}
	}
}

const company = new Company('Pide Piper', '11.111.111/0001-11')

const collaborator001 = new Collaborator('Vitor', 'Santana')
const collaborator002 = new Collaborator('Cássia', 'Araujo')
const collaborator003 = new Collaborator('Julia', 'Lima')

company.addCollaborator(collaborator001)
company.addCollaborator(collaborator002)
company.addCollaborator(collaborator003)

company.showCollaborators()
