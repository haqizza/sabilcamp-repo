const readline = require('readline')
const fs = require('fs')

const fileData = fs.readFileSync('./data.json')

const data = JSON.parse(fileData)

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan : ',
})


let count = 0

function writeQuestion(rl_, index){
  console.log((`Pertanyaan: ${data[index].question}`))
  rl_.prompt()
}

function checkAnswer(sentence){
  if(sentence == data[count].answer) {
    console.log(('Selamat Anda Benar!\n'))
    count++
  }
  else {
    console.log(('Wkwkwkwk, Anda kurang beruntung!\n'))
  }
}

console.log('Selamat datang di permainan Tebak Kata, silakan isi dengan jawaban yang benar ya!\n')
writeQuestion(rl, count)

rl.on('line', (sentence) => {
  checkAnswer(sentence)

  if (count >= data.length){
    console.log(('Hore Anda Menang!'))
    rl.close()
  }
  else {
    writeQuestion(rl, count)
  }
})