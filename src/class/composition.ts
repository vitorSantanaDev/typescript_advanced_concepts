export class Motor {
	turnOn(): void {
		console.log(`Motor está ligado`)
	}

	accelerate(): void {
		console.log(`Motor está acelerando`)
	}

	stop(): void {
		console.log(`Motor está parando`)
	}

	turnOff(): void {
		console.log(`Motor está desligado...`)
	}
}

export class Car {
	private readonly motor: Motor = new Motor()

	turnOn(): void {
		this.motor.turnOn()
	}

	accelerate(): void {
		this.motor.accelerate()
	}

	stop(): void {
		this.motor.stop()
	}

	turnOff(): void {
		this.motor.turnOff()
	}
}

const car = new Car()
car.turnOn()
car.accelerate()
car.stop()
car.turnOff()
