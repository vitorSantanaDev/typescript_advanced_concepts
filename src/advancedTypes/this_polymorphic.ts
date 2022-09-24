export class Calculator {
	constructor(public number: number) {}

	add(number: number): this {
		this.number += number
		return this
	}
	sub(number: number): this {
		this.number -= number
		return this
	}
	mult(number: number): this {
		this.number *= number
		return this
	}
	div(number: number): this {
		this.number /= number
		return this
	}
}

export class SubCalculator extends Calculator {
	pow(number: number): this {
		this.number **= number
		return this
	}
}

const myCalculator = new Calculator(10)
myCalculator.add(5).mult(2).div(2).sub(5)

const mySubCalculator = new SubCalculator(10)
mySubCalculator.add(5).mult(2).div(2).sub(5).pow(2)

console.log({ myCalculator })
console.log({ mySubCalculator })

// Builder - GOF

export class RequestBuilder {
	private method: 'GET' | 'POST' | null = null
	private url: string | null = null

	setMethod(method: 'GET' | 'POST'): this {
		this.method = method
		return this
	}

	setUrl(url: string): this {
		this.url = url
		return this
	}

	send(): void {
		console.log(`Enviando dados via ${this.method} para ${this.url}`)
	}
}

const request = new RequestBuilder() // Builder
request.setUrl('http://www.google.com').setMethod('POST').send()
