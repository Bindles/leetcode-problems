// 1190. Reverse Substrings Between Each Pair of Parentheses
// LEARN THIS REVISIT STACK 
s = "(u(love)i)"
s2 = "(ed(et(oc))el)"
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stack = [];
  for (let char of s) {
    if (char === ')') {
      const temp = [];
      while (stack[stack.length - 1] !== '(') {
        temp.push(stack.pop());
      }
      stack.pop(); // remove the '('
      stack.push(...temp);
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}
console.log(reverseParentheses(s))
  