function sumOfEvens(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfEvens(10));
console.log(sumOfEvens(6));