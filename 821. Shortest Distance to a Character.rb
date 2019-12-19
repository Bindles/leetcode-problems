#* 821. Shortest Distance to a Character
s = "loveleetcode", c = "e"
# @param {String} s
# @param {Character} c
# @return {Integer[]}
def shortest_to_char(s, c)
    
end
p shortest_to_char(s, c)

number = 5
nums = [1, 2, 4, 8, 9]

closest_num = nums.min_by { |x| (x - number).abs }
puts closest_num