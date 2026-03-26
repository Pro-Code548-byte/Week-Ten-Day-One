function getGrade(num) {
  if (num >= 70) {
    return "A";
  } else if (num >= 60) {
    return "B";
  } else if (num >= 50) {
    return "C";
  } else {
    return "F";
  }
}

console.log(getGrade(85));
console.log(getGrade(62));
console.log(getGrade(45));
