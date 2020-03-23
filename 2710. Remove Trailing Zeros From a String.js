// 2710. Remove Trailing Zeros From a String
num = "51230100"
//GOOD LEARNING HERE
//SOL 2 | SOL 1 DIDINT WORK NEED TO SWAP parseInt => BigInt
var removeTrailingZeros = function(num) {
  return BigInt(num.split('').reverse().join('')).toString().split('').reverse().join('');
};

//WORKING . . .
//SOL 1 | DOES NOT WORK
function removeTrailingZeros(num) {
  return parseInt(num.split('').reverse().join('')).toString().split('').reverse().join('');
};
console.log(removeTrailingZeros(num));
