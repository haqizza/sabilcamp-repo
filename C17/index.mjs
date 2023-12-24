import MesinHitung from './MesinHitung.mjs'

var mh = new MesinHitung()

console.log(mh.add(10).substract(5).result()) // 6
console.log(mh.add(3).multiply(4).divide(6).result()) // 6
mh.x = 7
console.log(mh.multiply(2).multiply(Math.PI).result()) //44
mh.x = 7
console.log(mh.square().multiply(Math.PI).result()) //154
mh.x = 4
console.log(mh.exponent(3).result()) //64
console.log(mh.squareRoot().result()) //8
console.log(mh.circleCircumfence().result()) //50.265...
console.log(mh.circleArea().result()) //159

