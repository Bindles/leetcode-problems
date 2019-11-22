// 1910. Remove All Occurrences of a Substring
s = "daabcbaabcbc"; part = "abc"
//SOL 1
function removeOccurrences(s, part) {
  while (s.includes(part)) {
      s = s.replace(part, '');
  }
  return s;
}
console.log(removeOccurrences(s, part));
