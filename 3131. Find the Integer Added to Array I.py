#* 3131. Find the Integer Added to Array I
nums1 = [2,6,4]; nums2 = [9,7,5]
#nums1 = [10]; nums2 = [5]
from typing import List
#*
def addedInteger(nums1, nums2):
  return min(nums2) - min(nums1)

print(addedInteger(nums1, nums2))

#* FOR FUN AND TEST ZIP SORT
def addedInteger(nums1, nums2):
  x=list(zip(sorted(nums1), sorted(nums2)))
  return x[0][1] - x[0][0]
  
print(addedInteger(nums1, nums2))

#* MISC
print(sorted(nums1))