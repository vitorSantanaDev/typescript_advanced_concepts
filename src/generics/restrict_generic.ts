type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K]

const getKey: GetKeyFn = (object, key) => object[key]

const animal = {
	name: 'Cat',
	age: 8,
	kg: 12,
	color: 'Brown',
}

const animalName = getKey(animal, 'name')
const animalColor = getKey(animal, 'color')

console.log({ animalName })
console.log({ animalColor })
