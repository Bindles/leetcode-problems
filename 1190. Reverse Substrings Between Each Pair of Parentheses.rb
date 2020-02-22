#* 1190. Reverse Substrings Between Each Pair of Parentheses
#* LEARN THIS REVISIT STACK 
s = "(u(love)i)"
s2 = "(ed(et(oc))el)"
# @param {String} s
# @return {String}
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

#* CONCISE
def reverse_parentheses(s)
  stack = []
  s.each_char do |char|
    if char == ')'
      temp = []
      temp << stack.pop while stack.last != '(' 
      stack.pop # remove the '('
      stack.push(*temp)
    else
      stack.push(char)
    end
  end
  stack.join
end
p reverse_parentheses(s)
p reverse_parentheses(s2)


#*MISC
#* MESSING W LOOP
def reverse_parentheses(s)
  stack = []
  s.each_char do |char|
    if char == ')'
      temp = []
      temp << stack.pop until stack.last == '('
      stack.pop
      stack.push(*temp)
    else
      stack.push(char)
    end
  end
  stack.join
end
p reverse_parentheses(s)
p reverse_parentheses(s2)


#* COMPETITION:
#*
# @param {String} s
# @return {String}
def reverse_parentheses(s)
  # a stack will help with maintaining the nesting
  # how do you go multiple levels deep?
  # what if you had an array? [level] => current string
  # once a closing bracket is seen, you take the last level string, reverse it and append it to
  # the second to last
  
  #level = -1
  substrings = [""]
  
  # Iterate through the string character by character
  (0..s.length-1).each do |i|
      current_char = s[i]
      if current_char == "("
          # Add a new empty string for a new nesting level
          substrings.insert(0, "")
      elsif current_char == ")"
        # Remove the top string from the stack
        top_string = substrings.shift
        # Reverse the top string
        top_string.reverse!
        # Append the reversed string to the next level
        substrings[0] << top_string
      else
        # Append regular characters to the current top string
        substrings[0] += current_char  
      end
  end
  
  # Remove the outermost parentheses and return the result
  substrings.shift
end
p reverse_parentheses(s)
p reverse_parentheses(s2)



#* WORKING . . .
def reverse_parentheses(s)
  s.gsub('(',' ').gsub(')',' ').split(' ').reverse.map(&:reverse)
end
p reverse_parentheses(s)
p reverse_parentheses(s2)

# def reverse_parentheses(s)
#   #end_index=0
#     s.each_char.with_index do |char,i|
#       if char == '('
  
#       end
# end
# p reverse_parentheses(s)