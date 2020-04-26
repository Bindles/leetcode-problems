#* 2186. Minimum Number of Steps to Make Two Strings Anagram II
s = "leetcode"; t = "coats"
# @param {String} s
# @param {String} t
# @return {Integer}
#* WORKING . . .
#*
def min_steps(s, t)
  p s_tal = s.chars.tally
  p t_tal = t.chars.tally
  p unique_chars = s_tal.keys | t_tal.keys

  #p tchar = t.chars.map{|char| char if !s.chars.tally includes ["char"]  }
  p t_char = t.chars.reject { |char| s.chars.tally.key?(char) }
  p s_char = s.chars.reject { |char| t.chars.tally.key?(char)}  
end
p min_steps(s, t)

#*
def min_steps(s, t)
  t_char = t.chars.reject { |char| s.chars.tally.key?(char) }
  s_char = s.chars.reject { |char| t.chars.tally.key?(char)}
  s_char.size + t_char.size 
end
p min_steps(s, t)

#*
def min_steps(s, t)
  p t_char = t.chars.reject { |char| s.chars.include?(char) }
  p s_char = s.chars.reject { |char| t.chars.include?(char)}  
end
p min_steps(s, t)

