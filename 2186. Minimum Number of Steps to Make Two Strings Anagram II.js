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
console.log(minSteps(s, t)); // Output: 

//SOL 2
var minSteps = function(s, t) {
  let steps = 0;

  // Count the frequency of each character in string s
  let s_count = {};
  for (let char of s) {
      s_count[char] = (s_count[char] || 0) + 1;
  }

  // Count the frequency of each character in string t
  let t_count = {};
  for (let char of t) {
      t_count[char] = (t_count[char] || 0) + 1;
  }

  // Combine the keys of both s_count and t_count and create a set to ensure uniqueness
  let unique_chars = new Set([...Object.keys(s_count), ...Object.keys(t_count)]);

  // Calculate the number of steps needed
  unique_chars.forEach(char => {
      steps += Math.abs((s_count[char] || 0) - (t_count[char] || 0));
  });

  return steps;
};
s = "leetcode"; t = "coats"
console.log(minSteps(s, t)); // Output: 7

s = "night";
t = "thing";
console.log(minSteps(s, t)); // Output: 0

// LEARN / LESSON
let s_count = {};
for (let char of s) {
    s_count[char] = (s_count[char] || 0) + 1;
}
let t_count = {};
for (let char of t) {
    t_count[char] = (t_count[char] || 0) + 1;
}

//2 WAYS OF unique_chars = s_count.keys | t_count.keys [ruby]
// Collect all unique characters from both strings
var uniq_chars = new Set(Object.keys(s_count).concat(Object.keys(t_count)));
console.log(uniq_chars)
var uniq_chars = new Set([...Object.keys(s_count), ...Object.keys(t_count)]);
console.log(uniq_chars)