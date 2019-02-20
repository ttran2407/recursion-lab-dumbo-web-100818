// Code your solution here!

printString = (word) => {
  console.log(word[0])
  
  if (word.length > 1){ 
    printString(word.substring(1, word.length))
  }
}