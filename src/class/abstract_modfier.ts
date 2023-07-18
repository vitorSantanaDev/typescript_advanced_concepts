export abstract class Character {
	protected abstract avatar: string
	constructor(
		protected name: string,
		protected strikeForce: number,
		protected life: number,
	) {}

	attack(character: Character): void {
		character.loseLife(this.strikeForce)
		this.staff()
		console.log(`${this.name} is attacking`)
	}

	loseLife(strikeForce: number): void {
		this.life -= strikeForce
		console.log(`${this.avatar} - ${this.name} now has ${this.life} health`)
	}

	abstract staff(): void
}

export class Warrior extends Character {
	avatar = '\u{1F9DD}'
	staff(): void {
		console.log(`${this.avatar} Warrior will finish you off`)
	}
}

export class Monster extends Character {
	avatar = '\u{1F9DF}'
	staff(): void {
		console.log(`${this.avatar} Monster will finish you off`)
	}
}

const warrior = new Warrior('Warrior', 100, 1000)
const monster = new Monster('Monster', 100, 2000)

warrior.attack(monster)
warrior.attack(monster)
warrior.attack(monster)

monster.attack(warrior)
monster.attack(warrior)
monster.attack(warrior)
