const readline = require('readline')
const fs = require('fs')


const filename = process.argv[2]

try {
  const fileData = fs.readFileSync(filename)

  const data = JSON.parse(fileData)

  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: ',
  })

  console.log(`Selamat datang di permainan Tebak-Tebakan. Kamu akan diberikan pertanyaan dari file ${filename.split('/').pop()}\n` +
    `Untuk bermain, jawablah dengan jawaban yang sesuai\n` +
    `Gunakan 'skip' untuk menangguhkan pertanyaan, dan di akhir pertanyaan akan ditanyakan kembali.\n`
  )


  let count = 0
  let failedCount = 0

  function writeQuestion(rl_, index){
    console.log((`Pertanyaan: ${data[index].question}`))
    rl_.prompt()
  }

  function processAnswer(sentence, rl_){
    if(sentence === 'skip'){
      data.push(data.splice(count, 1)[0])
      failedCount = 0

      console.log('')
      writeQuestion(rl_, count)
    }
    else if(sentence === data[count].answer) {
      console.log(('\nAnda Beruntung!\n'))
      count++
      failedCount = 0

      if (count >= data.length){
        console.log(('Hore Anda Menang!'))
        rl_.close()
      }
      else {
        writeQuestion(rl_, count)
      }
    }
    else {
      failedCount++
      console.log(`\nAnda kurang beruntung! Anda telah salah ${failedCount} kali, silakan coba lagi.`)
      rl_.prompt()
    }
  }

  writeQuestion(rl, count)

  rl.on('line', (sentence) => {
    processAnswer(sentence, rl)
  })
} catch (error) {
  if(error.code === 'ENOENT'){
    console.log('File soal tidak ditemukan')
  }
  if(error.code === 'ERR_INVALID_ARG_TYPE'){
    console.log('Tolong sertakan nama file sebagai inputan soalnya\n' +
    'Misalnya: node indes.js data.json')
  }
  process.exit()
}