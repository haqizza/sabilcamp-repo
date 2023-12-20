function deretSubway(n) {
  let array = []

  for (let index = 2; index <= (n*2); index += 2) {
    let value

    if ((index % 4 === 0) && (index % 5 === 0)) value = 'SUBWAY'
    else if (index % 4 === 0) value = 'SUB'
    else if (index % 5 === 0) value = 'WAY'
    else value = index
    
    array.push(value)
  }

  return array
}

console.log(deretSubway(10))//[ 2, 'SUB', 6, 'SUB', 'WAY', 'SUB', 14,'SUB', 18,'SUBWAY']

