function pattern(str) {
  let separatedValues = str.split(' ')
  let missingValues = []

  let secondValue = parseInt(separatedValues[2])

  for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
      let firstValue = parseInt(separatedValues[0].replace('#', i.toString()))
      let resultValue = parseInt(separatedValues[4].replace('#', j.toString()))

      if((firstValue * secondValue) === resultValue){
        missingValues.push(i)
        missingValues.push(j)
        break
      }
    } 
  }
  return missingValues
}

console.log(pattern("42#3 * 188 = 80#204")) // [8, 5]
console.log(pattern("8#61 * 895 = 78410#5")) // [7, 9]