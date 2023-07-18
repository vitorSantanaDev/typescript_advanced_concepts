export abstract class Tool {
	constructor(private _name: string) {}

	abstract toWrite(): void

	get name(): string {
		return this._name
	}
}

export class Writer {
	private _tool: Tool | null = null
	constructor(private _name: string) {}

	get name(): string {
		return this._name
	}

	set tool(tool: Tool | null) {
		this._tool = tool
	}

	get tool() {
		return this._tool
	}

	toWrite(): void {
		if (this.tool) {
			this.tool.toWrite()
		} else {
			console.log(`There is no tool`)
		}
	}
}

export class Pencil extends Tool {
	toWrite(): void {
		console.log(`${this.name} is writing`)
	}
}

export class Typewriter extends Tool {
	toWrite(): void {
		console.log(`${this.name} is writing`)
	}
}

const writer = new Writer('Vitor')
const pencil = new Pencil('Bic')
const typewriter = new Pencil('Machine')

console.log(writer.name)
console.log(pencil.name)
console.log(typewriter.name)

writer.tool = pencil

writer.toWrite()
