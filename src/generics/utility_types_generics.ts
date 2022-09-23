export const typeRecord: Record<string, string | number> = {
	name: 'Vitor',
	lastName: 'Santana',
	age: 22,
}

type PersonProtocol = {
	name: string
	lastName: string
	age?: number
}

type PersonProtocolRequired = Required<PersonProtocol>

export const typeRequired: PersonProtocolRequired = {
	name: 'Vitor',
	lastName: 'Santana',
	age: 23,
}

type PersonProtocolPartial = Partial<PersonProtocol>

export const typePartial: PersonProtocolPartial = {
	lastName: 'Santana',
}

type PersonProtocolReadOnly = Readonly<PersonProtocol>

export const typeReadOnly: PersonProtocolReadOnly = {
	name: 'Vitor',
	lastName: 'Santana',
	age: 23,
}

type PersonProtocolPick = Pick<PersonProtocol, 'name' | 'age'>

export const typePick: PersonProtocolPick = {
	age: 23,
	name: 'Vitor',
}

// Extract and Exclude
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

export type ExcludeType = Exclude<ABC, CDE>
export type ExtractType = Extract<ABC, CDE>

// Example

type AccountMongo = {
	_id: string
	name: string
	age: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
	id: string
}

const accountMongo: AccountMongo = {
	_id: '67363asddefe98201018deasd8',
	name: 'Vitor Santana',
	age: 23,
}

function mapAccountObject(accountMongo: AccountMongo): AccountApi {
	const { _id, ...accountData } = accountMongo
	return { ...accountData, id: _id }
}

export const accountApi: AccountApi = mapAccountObject(accountMongo)
