#* 2716. Minimize String Length
s = "aaabc"
#* planning
#loop:
# s.each_with_index |c,i| =>
# delete closest other occurenc of c to the left of it if any

# @param {String} s
# @return {Integer}
#* SOL 2 | WHICH IS FASTER BYTES OR CHARS | GUESSING BYTES | TESTING...
def minimized_string_length(s)
  s.bytes.tally.size
end
p minimized_string_length(s)
#* SOL 1
def minimized_string_length(s) 
  s.chars.tally.size
end
p minimized_string_length(s)


#*WORKING. . .
#*
def minimized_string_length(s)
  p ss = s.split('')
  ss.each_with_index do |c,i|
    p c
    ci = ss.index(c)
    p ci
    p "#{ss.index(c)} #{i}"
    if ss.index(c) < i
      p ss.delete_at(ci)
    end

  end
  ss
end
p minimized_string_length(s)

#*
def minimized_string_length(s)
  res=[]
    p ss = s.split('')
    ss.each_with_index do |c,i|
      p c
      ci = ss.index(c)
      p ci
      p "#{ss.index(c)} #{i}"
      if ss.index(c) < i
        res << ci
      end
      res
      ss.delete_at(*ci)
    end
    p '-'
    ss
end
p minimized_string_length(s)


#*MISC
def minimized_string_length(s)
  s.chars.each_with_index do |c,i|
      p c
      p s.index(c)
  end
  s
end
p minimized_string_length(s)


