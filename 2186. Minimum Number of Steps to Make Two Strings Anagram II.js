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
    let steps = 0
    s_count = {}
    for (let char of s) {
      s_count[char] = (s_count[char] || 0) + 1;
    }
    t_count = {}
    for (let char of t) {
      t_count[char] = (t_count[char] || 0) + 1;
    }
};
console.log(minSteps(s,t))



