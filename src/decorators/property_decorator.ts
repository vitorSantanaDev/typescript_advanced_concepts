export function minLength(length: number) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (target: any, key: string) => {
		let initialValue = target[key]

		const getter = () => initialValue

		const setter = (value: string) => {
			if (value.length < length) {
				console.log(
					`Error: Você não pode criar um ${key} com o tamanho menor que ${length} caracteres`,
				)
			} else {
				initialValue = value
			}
		}

		Object.defineProperty(target, key, {
			get: getter,
			set: setter,
		})
	}
}

export class Movie {
	// Validando o valor de title
	@minLength(5)
	title: string

	constructor(public titleMovie: string) {
		this.title = titleMovie
	}
}

const movie = new Movie('Teste')

console.log(movie.title)
