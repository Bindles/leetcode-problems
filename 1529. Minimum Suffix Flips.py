#* 1529. Minimum Suffix Flips
target = "10111"
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