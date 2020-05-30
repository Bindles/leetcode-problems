#* 1863. Sum of All Subset XOR Totals
nums = [1,3]
# @param {Integer[]} nums
# @return {Integer}
def subset_xor_sum(nums)
    (1..nums.size).map{|num|
      nums.combination(num).to_a.sum{|x|
        x.reduce(:^)
      }
    }.sum
end
p subset_xor_sum(nums)

#*WORKING.. [none work]
#*
def subset_xor_sum(nums)
    (1..nums.size).map{|i|
      nums.combination(i).to_a.sum{|c|
        c.reduce(:^)
      }
    }.reduce(:^)
end
p subset_xor_sum(nums)

p 4^2

#*
def subset_xor_sum(nums)
    nums.reduce(:^)
end
p subset_xor_sum(nums)