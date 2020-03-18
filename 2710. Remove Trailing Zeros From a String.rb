#* 2710. Remove Trailing Zeros From a String
num = "51230100"
# @param {String} num
# @return {String}
def remove_trailing_zeros(num)
  num.reverse.to_i.to_s.reverse
end
p remove_trailing_zeros(num)