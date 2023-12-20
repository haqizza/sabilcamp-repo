function weirdMultiply (number) {
  let numberString = number.toString()
  let numberArray = numberString.split('')

  if (numberString.length === 1){
    return number
  }
  else {
    let result = 1
  
    numberArray.forEach((n) => {
      result = result * parseInt(n)
    })
  
    return weirdMultiply(result)
  }
}

console.log(weirdMultiply(39)) // 3*9=27-> 2*7=14 -> 1*4=4
console.log(weirdMultiply(999)) // 9*9*9=729 -> 7*2*9=126 -> 1*2*6=12 -> 1*2=2 
console.log(weirdMultiply(3)) // 3 sudah 1 digit