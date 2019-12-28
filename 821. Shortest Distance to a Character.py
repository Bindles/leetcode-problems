#* 821. Shortest Distance to a Character
s = "loveleetcode"; c = "e"
from typing import List
#*
class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        res = []
        nums = [i for i, char in enumerate(s) if char == c]
        
        for i in range(len(s)):
            closest = min(nums, key=lambda x: abs(x - i))
            res.append(abs(i - closest))
        
        return res
    
print(Solution().shortestToChar(s,c))



        