function spiral(param) {
  let nums = []
  let numsMatrix = []
  
  for (let i = 0; i < param*param; i++) {
    nums.push(i)
  }
  while(nums.length) numsMatrix.push(nums.splice(0, param));
  
  let arr = []
  let loopCount = 0
  let count = 0
  
  while (count < (param * param)) {
    let x = 0 + loopCount
    let y = 0 + loopCount
    
    for (x; x < (param - loopCount); x++) {
      if (count === param * param) break
      arr.push(numsMatrix[y][x])
      count++
    }

    x -= 1
    for (y += 1; y < (param - loopCount); y++) {
      if (count === param * param) break
      arr.push(numsMatrix[y][x])
      count++
    }

    y -= 1
    for (x -= 1; x >= (0 + loopCount); x--) {
      if (count === param * param) break
      arr.push(numsMatrix[y][x])
      count++
    }

    x += 1
    for (y -= 1; y >= (1 + loopCount); y--) {
      if (count === param * param) break
      arr.push(numsMatrix[y][x])
      count++
    }

    loopCount++
  }

  return arr
}

function check(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return (`${arr1[i]} ` + false)
  }
  return true
}

console.log(spiral(3))
const n3 = [0,1,2,5,8,7,6,3,4]
console.log(check(spiral(3), n3))


console.log(spiral(5))
const n5 = [0,1,2,3,4,9,14,19,24,23,22,21,20,15,10,5,6,7,8,13,18,17,16,11,12]
console.log(check(spiral(5), n5))

console.log(spiral(6))
const n6 = [0,1,2,3,4,5,11,17,23,29,35,34,33,32,31,30,24,18,12,6,7,8,9,10,16,22,28,27,26,25,19,13,14,15,21,20]
console.log(check(spiral(6), n6))


console.log(spiral(7)) 
const n7 = [0,1,2,3,4,5,6,13,20,27,34,41,48,47,46,45,44,43,42,35,28,21,14,7,8,9,10,11,12,19,26,33,40,39,38,37,36,29,22,15,16,17,18,25,32,31,30,23,24]
console.log(n7.length)
console.log(check(spiral(7), n7))
