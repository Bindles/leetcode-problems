#* 2859. Sum of Values at Indices With K Set Bits
nums = [5,10,1,5,2]; k = 1
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def sum_indices_with_k_set_bits(nums, k)
  nums.each_index.sum { |i| i.to_s(2).count('1') == k ? nums[i] : 0 }
end
p sum_indices_with_k_set_bits(nums, k)

