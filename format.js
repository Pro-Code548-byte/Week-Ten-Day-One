function formatPrice(num) {
  return "₦" + num.toFixed(2);
}
console.log(formatPrice(1500));
console.log(formatPrice(49.9));
