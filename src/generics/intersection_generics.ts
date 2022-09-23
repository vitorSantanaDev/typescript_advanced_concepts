function uniteObjects<T, U>(firstObj: T, secondObj: U): T & U {
	return Object.assign({}, firstObj, secondObj)
}

const firstObj = { keyOne: 'KeyOne' }
const secondObj = { keyTwo: 'KeyTwo' }

const thirdObject = uniteObjects(firstObj, secondObj)

console.log({ thirdObject })
