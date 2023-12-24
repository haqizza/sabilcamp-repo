class CarFactory {
  name
  monthlyProduction
  annualProduction

  constructor (name) {
    this.name = name
    this.monthlyProduction = parseInt(Math.random() * 100)
    this.annualProduction = parseInt(Math.random() * 100)
  }
}

class Car {
  name
  factory
  tire
  seat
  door
  age

  constructor (name) {
    this.name = name
    this.age = 0
  }

  warrantyCheck(){
    // 5 year warranty
    if (this.age > 5) return 'Not Active'
    else return 'Active'
  }
}

class Tire {
  number

  constructor (number) {
    this.number = number
  }
}

class Seat {
  number

  constructor (number) {
    this.number = number
  }
}

class Door {
  number

  constructor (number) {
    this.number = number
  }
}

module.exports = {
  CarFactory,
  Car,
  Tire,
  Seat,
  Door
}