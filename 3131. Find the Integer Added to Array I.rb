#* 3131. Find the Integer Added to Array I
#nums1 = [2,6,4]; nums2 = [9,7,5]
nums1 = [10]; nums2 = [5]
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
#* SOL 1
def added_integer(nums1, nums2)
    x =nums1.sort.zip(nums2.sort)
    x.first.last - x.first.first
end
p added_integer(nums1, nums2)
