function romawi(n) {
  let romeNumber = '';

  while (n > 0) {   
    if (n >= 1000) {
      romeNumber += 'M'
      n -= 1000
    }
    else if(n >= 900) {
      romeNumber += 'CM'
      n -= 900
    }
    else if(n >= 500) {
      romeNumber += 'D'
      n -= 500
    }
    else if(n >= 400) {
      romeNumber += 'CD'
      n -= 400
    }
    else if(n >= 100) {
      romeNumber += 'C'
      n -= 100
    }
    else if(n >= 90) {
      romeNumber += 'XC'
      n -= 90
    }
    else if(n >= 50) {
      romeNumber += 'L'
      n -= 50
    }
    else if(n >= 40) {
      romeNumber += 'XL'
      n -= 40
    }
    else if(n >= 10) {
      romeNumber += 'X'
      n -= 10
    }
    else if(n === 9) {
      romeNumber += 'IX'
      n -= 9
    }
    else if(n >= 5) {
      romeNumber += 'V'
      n -= 5
    }
    else if(n === 4) {
      romeNumber += 'IV'
      n -= 4
    }
    else {
      romeNumber += 'I'
      n -= 1
    }
  }

  return romeNumber
}
// I, V, X, L, C, D, M

console.log('Script Testing untuk Konversi Romawi')
console.log('input | expected | result')
console.log('-------------------------')
console.log('4     | IV       | ', romawi(4))
console.log('9     | IX       | ', romawi(9))
console.log('13    | XIII     | ', romawi(13))
console.log('1453  | MCDLIII  | ', romawi(1453))
console.log('1646  | MDCXLVI  | ', romawi(1646))