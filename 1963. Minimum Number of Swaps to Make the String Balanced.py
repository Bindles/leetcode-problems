#PYTHON
#* 1963. Minimum Number of Swaps to Make the String Balanced
s = "][]["
class Solution:
  def minSwaps(self, s: str) -> int:
    open_bracket_count=0
    for char in s:
        if char =='[':
            open_bracket_count+=1
        elif open_bracket_count>0:
                open_bracket_count-=1
    return (open_bracket_count+1)//2

print(Solution().minSwaps(s))