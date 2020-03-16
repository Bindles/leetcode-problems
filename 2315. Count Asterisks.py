#* 2315. Count Asterisks
# s = "iamprogrammer"
s = "yo|uar|e**|b|e***au|tifu|l"
# @param {String} s
# @return {Integer}
#* SOL 1.1 | NO PUTS
class Solution:
    def countAsterisks(self, s: str) -> int:
        res=0
        x = s.split('|')

        for i, substr in enumerate(x):
            if i % 2 == 0:
                res += substr.count('*')

        return res
    
print(Solution().countAsterisks(s))
    
#* SOL 1.1
def countAsterisks(s):
  res=0
  x = s.split('|')
  print(x)

  for i, substr in enumerate(x):
    if i % 2 == 0:
        print(substr.count('*'))
        res += substr.count('*')

  return res

print(countAsterisks(s))


#*WORKING. . .
#* NO GOOD
def countAsterisks(s):
  res=0
  x = s.split('|')
  print(x)

  for i, substr in enumerate(x):
    print(substr)
    if i % 2 == 0:
      res += substr.count('*')

    return res
  
s = "yo|uar|e**|b|e***au|tifu|l"
print(countAsterisks(s))
