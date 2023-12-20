function sum() {
  let init = 0;
  const argList = [...arguments]
  return argList.reduce((acc, current) => acc + current, init)
}

sum(1,3,6) //10
sum(1,3) //4
sum(12) //12
sum(10,3,6,7,10) //36