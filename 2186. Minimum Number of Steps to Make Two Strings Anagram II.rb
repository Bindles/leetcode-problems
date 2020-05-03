#* 2186. Minimum Number of Steps to Make Two Strings Anagram II
s = "leetcode"; t = "coats"
# @param {String} s
# @param {String} t
# @return {Integer}
#* SOLVED GOOD PROBLEM LEARNED SOME 
def min_steps(s, t)
  s_count = s.chars.tally
  t_count = t.chars.tally
  steps = 0
  # Collect all unique characters from both strings
  unique_chars = s_count.keys | t_count.keys
  
  unique_chars.each do |char|
    # Calc the diffe in counts of each character
    s_char_count = s_count[char] || 0
    t_char_count = t_count[char] || 0
    steps += (s_char_count - t_char_count).abs
  end
  steps
end
p min_steps(s, t)


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

#*
def min_steps(s, t)
  t.chars.reject { |char| s.chars.include?(char) }.size + s.chars.reject { |char| t.chars.include?(char)}.size
end
p min_steps(s, t)

