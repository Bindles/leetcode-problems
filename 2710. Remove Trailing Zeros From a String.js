// 2710. Remove Trailing Zeros From a String
num = "51230100"
function removeTrailingZeros(num) {
  return parseInt(num.split('').reverse().join('')).toString().split('').reverse().join('');
}
console.log(removeTrailingZeros(num));
