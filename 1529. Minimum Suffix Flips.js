// 1529. Minimum Suffix Flips
target = "10111"
/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
  let currentState=0
  let count=0

  for (char of target) {
      if (char != currentState) {
          count++
          currentState = char
      }
  }
  return count
};
console.log(minFlips(target))