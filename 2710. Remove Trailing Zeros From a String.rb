#* 2710. Remove Trailing Zeros From a String
num = "51230100"
# @param {String} num
# @return {String}
#* LOL GENIUS | WONDER IF IT WORKS IN PY
def remove_trailing_zeros(num)
  num.reverse.to_i.to_s.reverse
end
p remove_trailing_zeros(num)


#* INTERESTING OTHER GUYS SOL
def remove_trailing_zeros(num)
  num.chomp!('0') while num[-1] == '0'
  num
end
p remove_trailing_zeros(num)