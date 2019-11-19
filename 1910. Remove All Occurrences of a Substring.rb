#* 1910. Remove All Occurrences of a Substring
s = "daabcbaabcbc"; part = "abc"
# @param {String} s
# @param {String} part
# @return {String}
#* 1
def remove_occurrences(s, part)
  n = part.size
  i = 0

  while i <= s.size - n
    if s[i, n] == part
      s.slice!(i, n)
      #reset index to check for overlapping parts
      i = [0, i - n].max
    else
      i += 1
    end
  end
  s
end
p remove_occurrences(s, part)

#* WORKING . . .
def remove_occurrences(s, part)
  n=part.size
    (0..s.size-n).each do |i|
      s.slice!(i...n+i) if s[i...n+i] == part
    end
    s
end
s = "daabcbaabcbc"
part = "abc"
p remove_occurrences(s, part)







