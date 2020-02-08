#* 1850. Minimum Adjacent Swaps to Reach the Kth Smallest Number
num = "5489355142"; k = 4
# @param {String} num
# @param {Integer} k
# @return {Integer}
def count_steps(nums1, nums2)
  length = nums1.length
  swap_count = 0

  i = 0

  while i < length
    j = i

    while nums1[i] != nums2[j]
      j += 1
    end

    while i < j
      nums2[j], nums2[j - 1] = nums2[j - 1], nums2[j]
      j -= 1
      swap_count += 1
    end

    i += 1
  end

  swap_count
end

def find_next_permutation(nums)
  i = j = nums.length - 1

  while i > 0 && nums[i - 1] >= nums[i]
    i -= 1
  end

  return nums.reverse if i == 0

  while nums[i - 1] >= nums[j]
    j -= 1
  end

  nums[i - 1], nums[j] = nums[j], nums[i - 1]
  nums[i..-1] = nums[i..-1].reverse

  nums
end

def get_min_swaps(num, k)
  nums = num.chars.map(&:to_i)
  original = num.chars.map(&:to_i)

  while k > 0
    nums = find_next_permutation(nums)
    k -= 1
  end
  count_steps(nums, original)
end

p get_min_swaps(num, k)

