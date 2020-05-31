#* 1863. Sum of All Subset XOR Totals
nums = [1,3]
from itertools import combinations
from functools import reduce
from operator import xor

def subset_xor_sum(nums):
    total = 0
    for num in range(1, len(nums) + 1):
        for comb in combinations(nums, num):
            total += reduce(xor, comb)
    return total

print(subset_xor_sum(nums)) # Output: 6
nums = [1, 2, 3]
print(subset_xor_sum(nums))  # Output: 12
