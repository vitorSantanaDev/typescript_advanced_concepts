export class Product {
	constructor(public name: string, public price: number) {}
}

export class ShoppingCart {
	private readonly products: Product[] = []

	addProducts(...products: Product[]): void {
		for (const product of products) {
			this.products.push(product)
		}
	}

	productsQuantity(): number {
		return this.products.length
	}

	totalValue(): number {
		return this.products.reduce((acc, i) => (acc += i.price), 0)
	}
}

const product001 = new Product('Camiseta', 199)
const product002 = new Product('Meia', 76)
const product003 = new Product('Short', 35)
const shoppingCart = new ShoppingCart()

shoppingCart.addProducts(product001)
shoppingCart.addProducts(product002)
shoppingCart.addProducts(product003)

console.log(shoppingCart.productsQuantity())
console.log(shoppingCart.totalValue())
