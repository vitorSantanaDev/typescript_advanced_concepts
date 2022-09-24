type VotationOption = {
	numberOfVotes: number
	option: string
}

export class Votation {
	private _votationOptions: VotationOption[] = []

	constructor(public details: string) {}

	addVotationOption(votationOption: VotationOption): void {
		this._votationOptions.push(votationOption)
	}

	vote(votationIndex: number): void {
		if (!this._votationOptions[votationIndex]) return
		this._votationOptions[votationIndex].numberOfVotes += 1
	}

	get votationOptions(): VotationOption[] {
		return this._votationOptions
	}
}

export class VotationApp {
	private _votations: Votation[] = []

	addVotation(votation: Votation): void {
		this._votations.push(votation)
	}

	showVotations(): void {
		for (const votation of this._votations) {
			console.log(votation.details)
			for (const votationOption of votation.votationOptions) {
				console.log(votationOption.option, votationOption.numberOfVotes)
			}
		}
		console.log('#######')
		console.log('\n')
	}
}

const votationOne = new Votation('Qual a sua linguagem de programação?')
votationOne.addVotationOption({ option: 'Typescript', numberOfVotes: 0 })
votationOne.addVotationOption({ option: 'Javascript', numberOfVotes: 0 })
votationOne.addVotationOption({ option: 'GO Lang', numberOfVotes: 0 })

votationOne.vote(1)
votationOne.vote(1)
votationOne.vote(1)
votationOne.vote(0)
votationOne.vote(0)

const votationTwo = new Votation(
	'Qual o framework/biblioteca melhor de se trabalhar?',
)
votationTwo.addVotationOption({ option: 'React.JS', numberOfVotes: 0 })
votationTwo.addVotationOption({ option: 'Angular', numberOfVotes: 0 })
votationTwo.addVotationOption({ option: 'Vue.JS', numberOfVotes: 0 })

votationTwo.vote(1)
votationTwo.vote(1)
votationTwo.vote(1)
votationTwo.vote(2)
votationTwo.vote(0)

const votationApp = new VotationApp()
votationApp.addVotation(votationOne)
votationApp.addVotation(votationTwo)
votationApp.showVotations()
