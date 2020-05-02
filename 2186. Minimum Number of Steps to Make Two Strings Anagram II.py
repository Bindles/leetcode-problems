#* 2186. Minimum Number of Steps to Make Two Strings Anagram II
s = "leetcode"; t = "coats"
# @param {String} s
# @param {String} t
# @return {Integer}
from collections import Counter
#* SOLVED GOOD PROBLEM LEARNED SOME
def minSteps(s, t):
  s_count=Counter(s)
  t_count=Counter(s)
  steps=0
  uniq_chars = set(s.count().union((s.count())))

print(minSteps(s,t))
# def min_steps(s, t)
#   s_count = s.chars.tally
#   t_count = t.chars.tally
#   steps = 0
#   # Collect all unique characters from both strings
#   unique_chars = s_count.keys | t_count.keys
  
#   unique_chars.each do |char|
#     # Calc the diffe in counts of each character
#     s_char_count = s_count[char] || 0
#     t_char_count = t_count[char] || 0
#     steps += (s_char_count - t_char_count).abs
#   end
#   steps
# end


