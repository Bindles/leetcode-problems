#* 1963. Minimum Number of Swaps to Make the String Balanced
s = "][]["
# @param {String} s
# @return {Integer}
def min_swaps(s)
  open_bracket_count = 0
  for char in s.chars do
    
    if char == '['
      open_bracket_count+=1
    elsif open_bracket_count>0
      open_bracket_count-=1
    end

  end
  (open_bracket_count+1)/2
end
p min_swaps(s)





str="Hello"
arr = str.split('')

for elem in arr
  p elem
end
