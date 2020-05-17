// 2186. Minimum Number of Steps to Make Two Strings Anagram II
s = "leetcode"; t = "coats"
// LEARN => HASH TALLY HASH INIT
// MEM => myhash[char] = (myhash[char] || 0) + 1;(js)
// let myhash = {};
// for (let char of s) {
//     myhash[char] = (myhash[char] || 0) + 1;
// }
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
//WORKING
var minSteps = function(s, t) {
  let steps = 0;
  let s_count = {};
  for (let char of s) {
      s_count[char] = (s_count[char] || 0) + 1;
  }
  let t_count = {};
  for (let char of t) {
      t_count[char] = (t_count[char] || 0) + 1;
  }

  // Collect all unique characters from both strings
  let unique_chars = new Set(Object.keys(s_count).concat(Object.keys(t_count)));

  unique_chars.forEach(char => {
      steps += Math.abs((s_count[char] || 0) - (t_count[char] || 0));
  });

  return steps;
};
console.log(minSteps(s, t)); // Output: 7

s = "night";
t = "thing";
console.log(minSteps(s, t)); // Output: 0



