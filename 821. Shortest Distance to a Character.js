// 821. Shortest Distance to a Character
s = "loveleetcode"; c = "e"
function shortestToChar(s, c) {
  const res = [];
  const indices = [];
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === c) {
          indices.push(i);
      }
  }
  
  for (let i = 0; i < s.length; i++) {
      let minDist = Infinity;
      for (let index of indices) {
          minDist = Math.min(minDist, Math.abs(i - index));
      }
      res.push(minDist);
  }
  
  return res;
}
console.log(shortestToChar(s, c));  // Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
