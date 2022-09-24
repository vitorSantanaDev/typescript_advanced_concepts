type Veiculo = {
	marca: string
	ano: string
	preco: number
}

type Car = {
	brand: Veiculo['marca']
	year: Veiculo['ano']
	price: Veiculo['preco']
}

const myCar: Car = {
	brand: 'BMW',
	price: 220000,
	year: '2020',
}

console.log({ myCar })
