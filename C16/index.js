const { CarFactory, Car, Tire, Seat, Door } = require('./car.js')


let daihatsu = new CarFactory('Daihatsu')
let bmw = new CarFactory('BMW')

console.log(`monthly production ${daihatsu.name}: ${daihatsu.monthlyProduction}`)
console.log(`monthly production ${bmw.name}: ${bmw.monthlyProduction}`)

let car1 = new Car('Mobil 1')
let car2 = new Car('Mobil 2')

car1.factory = daihatsu
car1.tire = new Tire(4)
car1.seat = new Seat(4)
car1.door = new Door(5)

car2.factory = bmw
car2.tire = new Tire(4)
car2.seat = new Seat(6)
car2.door = new Door(5)

console.log(`\n${car1.name} factory/trademark: ${car1.factory.name}`)
console.log(`${car2.name} factory/trademark: ${car2.factory.name}`)



function warrantyCheck(car){
  // 5 year warranty
  if (car.age > 5) return 'Not Active'
  else return 'Active'
}

car1.age = Math.random() * 10
car2.age = Math.random() * 10

console.log(`\n${car1.name} warranty: ${warrantyCheck(car1)} (age: ${car1.age})`)
console.log(`${car2.name} warranty: ${warrantyCheck(car2)} (age: ${car2.age})`)