#PYTHON
#* 1910. Remove All Occurrences of a Substring
s = "daabcbaabcbc"; part = "abc"
def remove_occurrences(s, part):
    while part in s:
        s = s.replace(part, '', 1)
    return s

print(remove_occurrences(s, part))
