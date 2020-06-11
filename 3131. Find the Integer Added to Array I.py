#* 3131. Find the Integer Added to Array I
#nums1 = [2,6,4]; nums2 = [9,7,5]
nums1 = [10]; nums2 = [5]

def addedInteger(nums1, nums2):
  return min(nums1) - min(nums2)

print(addedInteger(nums1, nums2))