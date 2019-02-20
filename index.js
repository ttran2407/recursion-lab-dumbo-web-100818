// Code your solution here!

printString = (word) => {
  console.log(word[0])
  
  if (word.length > 1){ 
    printString(word.substring(1, word.length))
  }
}

let newWord = []
reverseString = (word) => {
  word = word.split("")
  newWord.push(word[word.length - 1])
  
  if (word.length > 0){
    reverseString(word.slice(-1))
  }
  
  return newWord.join("")
}
