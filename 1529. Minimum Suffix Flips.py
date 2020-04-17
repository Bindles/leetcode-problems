#* 1529. Minimum Suffix Flips
target = "10111"
#*
class Solution:
    def minFlips(self, target: str) -> int:
        current_state = "0"
        count=0

        for char in target:
            if char != current_state:
                count += 1
                current_state = char
                
        return count


print(Solution().minFlips(target))

#*
class Solution:
    def minFlips(self, target: str) -> int:
        n = len(target)
        s =[0] * n

        for i, c in enumerate(target):
            print(c)
            s[i] = 4

        return s


print(Solution().minFlips(target))