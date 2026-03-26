function isPositive(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(isPositive(10));
console.log(isPositive(-3));
console.log(isPositive(0));
