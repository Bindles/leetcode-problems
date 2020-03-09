#PYTHON
#* 1190. Reverse Substrings Between Each Pair of Parentheses
#* LEARN THIS REVISIT STACK 
s = "(u(love)i)"
s2 = "(ed(et(oc))el)"
#*
class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []
        for char in s:
            if char == ")":
                temp = ""
                while stack[-1] != "(":
                    temp += stack.pop()
                stack.pop()
                for tch in temp:
                    stack.append(tch)
            else:
                stack.append(char)
        
        return "".join(stack)

print(Solution().reverseParentheses(s))
print(Solution().reverseParentheses(s2))


#* ALMOST WORKS . . .
#* SOL 1 | DOESNT QUITE WORK | SO CLOSE
class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []
        result = ''
        for char in s:
            if char == ')':
                temp = ''
                while stack and stack[-1] != '(':
                    temp = stack.pop() + temp
                if stack:
                    stack.pop() 
                    stack.append(temp[::-1])  # Append the reversed substring to the stack
                else:
                    result += temp  # If no opening parenthesis is found, append to the result directly
            else:
                stack.append(char)
        while stack:
            result += stack.pop()
        return result   

print(Solution().reverseParentheses(s))
print(Solution().reverseParentheses(s2))


#* WORKING . . . [these dont work]
#*
def reverseParentheses(s):
    stack = []
    for char in s:
        if char == ')':
            temp = []
            while stack[-1] != '(':
                temp.append(stack.pop())
            stack.pop()  # remove the '('
            stack += temp[::-1]  # Append the reversed substring to the stack
        else:
            stack.append(char)
    return ''.join(stack)

print(reverseParentheses(s))
print(reverseParentheses(s2))


#*
def reverseParentheses(s):
    stack = []
    for char in s:
        if char == ')':
            temp = []
            while stack[-1] != '(':
                temp.append(stack.pop())
            stack.pop()  # remove the '('
            stack.extend(temp[::-1])  # Append the reversed substring to the stack
        else:
            stack.append(char)
    return ''.join(stack)

print(reverseParentheses(s))
print(reverseParentheses(s2))

#*
def reverseParentheses(s):
    stack = []
    for char in s:
        if char == ')':
            temp = []
            while stack and stack[-1] != '(':
                temp.append(stack.pop())
            if stack:
                stack.pop()  # remove the '('
                stack += temp[::-1]  # Append the reversed substring to the stack
        else:
            stack.append(char)
    return ''.join(stack)

print(reverseParentheses(s))
print(reverseParentheses(s2))
