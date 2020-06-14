// 3131. Find the Integer Added to Array I
nums1 = [2,6,4]; nums2 = [9,7,5]
// nums1 = [10]; nums2 = [5]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    return Math.min(...nums2) - Math.min(...nums1)
};
console.log(addedInteger(nums1,nums2))

console.log(Math.min(...nums2))