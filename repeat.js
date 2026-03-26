function repeatWord(word, times) {
  let result = "";

  for (let i = 1; i <= times; i++) {
    result += word;

    if (i < times) {
      result += " ";
    }
  }

  return result;
}
console.log(repeatWord("go", 3));
console.log(repeatWord("hello", 2));