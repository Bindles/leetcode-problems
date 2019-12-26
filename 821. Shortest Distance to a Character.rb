#* 821. Shortest Distance to a Character
s = "loveleetcode"; c = "e"
# @param {String} s
# @param {Character} c
# @return {Integer[]}
#* SOL 1
def shortest_to_char(s, c)
  res=[]
  nums = s.each_char.with_index.filter_map {|char, i| i if char == c}
  s.chars.each_index do |num|
    res << (num -  nums.min_by {|x| (x - num).abs}).abs
  end
  res
end
p shortest_to_char(s, c)

#* SOL 2
def shortest_to_char(s, c)
  res=[]
  p nums = s.each_char.with_index.filter_map {|char, i| i if char == c}
  s.chars.each_index do |i|
   p nums.map { |x| (x - i).abs }
   res << nums.map { |x| (x - i).abs }.min
  end
  res
end
p shortest_to_char(s, c)

#*SOL 2.1
def shortest_to_char(s, c)
  res = []
  indices = s.each_char.with_index.filter_map { |char, i| i if char == c }
  if indices.empty?
    raise "Character '#{c}' not found in string"
  end
  s.chars.each_index do |i|
    res << indices.map { |x| (x - i).abs }.min
  end
  res
end
p shortest_to_char(s, c)


#* MISC/TEST
number = 5
nums = [1, 2, 4, 8, 9]

closest_num = nums.min_by { |x| (x - number).abs }
puts closest_num

numbers = [2,4,5,7]
nums = [1, 2, 4, 8, 9]
numbers.each do |num|
  closest_num = nums.min_by { |x| (x - num).abs }
  puts closest_num
end