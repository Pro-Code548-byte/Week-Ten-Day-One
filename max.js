function findMax(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

console.log(findMax(3, 9, 5));
console.log(findMax(12, 7, 20));
