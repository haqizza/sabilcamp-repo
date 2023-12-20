function indexPrime(param) {
  primeList = []

  for(let i = 1; primeList.length <= param; i++){
    let state = true

    if (i === 1) {
      primeList.push(1)
      continue
    }

    for (let j = 1; j <= i; j++) {
      if (j === 1) {
        continue
      }
      if ((i !== j) && ((i % j) === 0)) {
        state = false
        break
      }
    }

    if (state) primeList.push(i)
  }

  return primeList.pop()
}

console.log(indexPrime(4)) // 7
console.log(indexPrime(500)) // 3571
console.log(indexPrime(37786)) // 450881