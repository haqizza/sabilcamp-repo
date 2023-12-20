function stringManipulation(word) {
  vowels = ['a', 'i', 'u', 'e', 'o']
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
}

console.log(stringManipulation('andi')) // andi
console.log(stringManipulation('budi')) // udibno