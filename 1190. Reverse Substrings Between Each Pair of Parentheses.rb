#* 1190. Reverse Substrings Between Each Pair of Parentheses
#* LEARN THIS REVISIT STACK 
s = "(u(love)i)"
s2 = "(ed(et(oc))el)"
# @param {String} s
# @return {String}


def reverse_parentheses(s)
    s.gsub('(',' ').gsub(')',' ').split(' ').reverse.map(&:reverse)
end
p reverse_parentheses(s)
p reverse_parentheses(s2)

#*
def reverse_parentheses(s)
  stack = []
  s.each_char do |char|
    if char == ')'
      temp = []
      while stack.last != '('
        temp << stack.pop
      end
      stack.pop #remove the '('
      stack.push(*temp)
    else
      stack.push(char)
    end
  end
  stack.join
end
p reverse_parentheses(s)
p reverse_parentheses(s2)



# WORKING . . .
# def reverse_parentheses(s)
#   #end_index=0
#     s.each_char.with_index do |char,i|
#       if char == '('
  
#       end
# end
# p reverse_parentheses(s)