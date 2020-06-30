#PYTHON
#* 2859. Sum of Values at Indices With K Set Bits
nums = [5,10,1,5,2]; k = 1
#*
def sumIndicesWithKSetBits(nums, k):
    return sum(nums[i] for i in range(len(nums)) if bin(i).count('1') == k)

print(sumIndicesWithKSetBits(nums, k))  # Example output


