#* 2315. Count Asterisks
# s = "iamprogrammer"
s = "yo|uar|e**|b|e***au|tifu|l"
# @param {String} s
# @return {Integer}
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

def countAsterisks(s):
  res=0
  x = s.split('|')
  print(x)

  for i, substr in enumerate(x):
    print(substr)
    if i % 2 == 0:
      res += substr.count('*')

    return res

print(countAsterisks(s))
  


# def count_asterisks(s)
#     res=0
#     s.split('|').each_with_index do |subs, i|
#         res += subs.count('*') if i.even?
#     end
#     res  
# end
