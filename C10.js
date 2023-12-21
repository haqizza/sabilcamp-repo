const readline = require('readline')

function sentenceManipulation(sentence) {
  vowels = ['a', 'i', 'u', 'e', 'o']

  let sentencePerWord = sentence.split(' ')

  let processed = sentencePerWord.map((word) => {
    let vowelStart = false

    vowels.forEach(vowel => {
      if(word[0] === vowel) vowelStart = true
    });
  
    if (vowelStart) return word
    else {
      let wordArray = word.split('');
      wordArray.push(wordArray.shift())
  
      return wordArray.join('') + 'no'
    }
  })
  return processed.join(' ')
}

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu di sini > ',
})

rl.prompt()

rl.on('line', (sentence) => {
  console.log('hasil konversi:', sentenceManipulation(sentence))
  rl.prompt()
}).on('close', () => {
  console.log('Good Bye!');
  process.exit(0);
})

