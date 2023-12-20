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

console.log(sentenceManipulation('aku pergi ke arab bersama ibu')) // aku ergipno ekno arab ersamabno ibu