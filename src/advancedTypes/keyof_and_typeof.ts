const myObjectOfTheColors = {
	blue: 'Azul',
	green: 'Verde',
	red: 'Vermelho',
	purple: 'Roxo',
}

type Colors = typeof myObjectOfTheColors
type ColorsKey = keyof Colors

function colorsTranslate(cor: ColorsKey, colors: Colors): string {
	return colors[cor]
}

console.log(colorsTranslate('blue', myObjectOfTheColors))
