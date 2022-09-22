interface IMyAsyncType<T> {
	value: T
}

interface IUserModel {
	id: string
	name: string
	age: number
}

async function fetchFn(url: string) {
	return fetch(url).then((response) => response.json())
}

async function myAsyncFn(url: string): Promise<IMyAsyncType<IUserModel>> {
	const response: Promise<IMyAsyncType<IUserModel>> = await fetchFn(url)
	return response
}
