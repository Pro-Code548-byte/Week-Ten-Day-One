function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("hello"));
console.log(countVowels("Lagos"));
