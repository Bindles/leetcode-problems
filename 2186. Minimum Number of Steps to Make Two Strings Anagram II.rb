#* 2186. Minimum Number of Steps to Make Two Strings Anagram II
s = "leetcode"; t = "coats"
#* LEARN => HASH TALLY HASH INIT
#* MEM => myhash[char] = (myhash[char] || 0) + 1;(js)
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

#* CONCISE | SIMILAR TO PYTHON SOL USING COUNTER
def min_steps(s, t)
  s_count = s.chars.tally
  t_count = t.chars.tally
  steps = 0

  # Collect all unique characters from both strings
  (s_count.keys | t_count.keys).each do |char|
    # Calculate the absolute difference in counts of each character, using fetch to default to 0 if the character is missing in either string, and accumulate the steps
    steps += (s_count.fetch(char, 0) - t_count.fetch(char, 0)).abs

  end
  steps
end

# Test cases
s1 = "leetcode"
t1 = "coats"
puts min_steps(s1, t1)  # Output: 7

s2 = "night"
t2 = "thing"
puts min_steps(s2, t2)  # Output: 0

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


#* TASK
#* HAVENT DONE A MANUAL TALLY IN YEARS OR SO LOL, LETS TRY
p hash = {}
s.each_char do |char|
  hash[char] ||= 0 #shorth 4 hash[char]=0 if hash[char].nil?;hash[char]+=1
  hash[char] +=1
end
p hash
#* OR [concise]
p myhash = Hash.new(0)
s.each_char do |char|
  myhash[char] += 1
end
p myhash

#* PYTHON
#* Python (longhand):
# hash = {}
# for char in s:
#     if char not in hash:
#         hash[char] = 0
#     hash[char] += 1

#* Python (concise):
# from collections import defaultdict

# myhash = defaultdict(int)
# for char in s:
#     myhash[char] += 1

#* JS
#* JavaScript (longhand):

# let s = "example";
# let hash = {};
# for (let char of s) {
#     if (!(char in hash)) {
#         hash[char] = 0;
#     }
#     hash[char] += 1;
# }

#* JavaScript (concise):
# let myhash = {};
# for (let char of s) {
#     myhash[char] = (myhash[char] || 0) + 1;
# }

#* JS W COMMENTS
# Given a string s
# let s = "example";

# Initialize an empty object
# let myhash = {};

# Iterate through each character in the string
# for (let char of s) {
#     myhash[char] = (myhash[char] || 0) + 1;
# }

# console.log(myhash);


