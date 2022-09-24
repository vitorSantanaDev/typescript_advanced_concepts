// Encadeamento opcional e operador de coalecência nula
type Documento = {
	title: string
	texto: string
	data?: Date
}

const documento: Documento = {
	title: 'Example test',
	texto: 'Example of the test',
}

console.log(documento.data?.toDateString() ?? '1 Ixi não existe data')
console.log(undefined ?? '2 Ixi não existe data')
console.log(null ?? '3 Ixi não existe data')
console.log(false ?? '4 Ixi não existe data')
