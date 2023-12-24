export default class MesinHitung {
  x

  constructor () {
    this.x = 1
  }

  result () {
    return this.x
  }

  add (number) {
    this.x += number
    return this
  }

  substract (number) {
    this.x -= number
    return this
  }

  divide (number) {
    this.x /= number
    return this
  }

  multiply (number) {
    this.x *= number
    return this
  }

  squareRoot () {
    this.x = Math.sqrt(this.x)
    return this
  }

  square () {
    this.x *= this.x
    return this
  }

  exponent (number) {
    if(number === 0) {
      this.x = 1
    }
    else {
      let temp = this.x
      for (let i = 1; i < number; i++) {
        this.x *= temp
      }
    }
    return this
  }

  circleCircumfence () {
    this.x = 2*Math.PI*this.x
    return this
  }

  circleArea () {
    this.x = Math.PI*this.x^2 
    return this
  }
}

