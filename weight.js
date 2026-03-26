function bmi(weight, height) {
  let value = weight / (height * height);

  if (value < 18.5) {
    return "Underweight";
  } else if (value >= 18.5 && value <= 24.9) {
    return "Normal";
  } else if (value >= 25 && value <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
console.log(bmi(70, 1.75));
console.log(bmi(100, 1.6));
