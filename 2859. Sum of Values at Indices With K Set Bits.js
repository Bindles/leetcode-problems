// JAVASCRIPT
// 2859. Sum of Values at Indices With K Set Bits
nums = [5,10,1,5,2]; k = 1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    return nums.reduce((sum, num, i) => {
        return sum + (i.toString(2).split('1').length - 1 === k ? num : 0);
    }, 0);
};
console.log(sumIndicesWithKSetBits(nums, k));

