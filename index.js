// Code your solution here!

printString = (word) => {
  console.log(word[0])
  
  if (word.length > 1){ 
    printString(word.substring(1, word.length))
  }
}


reverseString = (word) => {
  console.log(word[word.length - 1])
  
  if (word.length > 1){
    reverseString(word.substring(0, word.length - 2))
  }
}
