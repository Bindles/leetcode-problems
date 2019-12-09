// 657. Robot Return to Origin
moves = "UD"
Array.prototype.count = function(val) {
  return this.filter(x => x === val).length;
};

function judgeCircle(moves) {
  const moveArray = moves.split('');
  return moveArray.count('U') === moveArray.count('D') && moveArray.count('L') === moveArray.count('R');
}

// Example usage
var moves = "UDLR";
console.log(judgeCircle(moves));  // Output: true
