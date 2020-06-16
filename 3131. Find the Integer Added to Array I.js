// 3131. Find the Integer Added to Array I
nums1 = [2,6,4]; nums2 = [9,7,5]
// nums1 = [10]; nums2 = [5]
//LEARN => ZIP
//LEARN => Math.min dont forget spread (...) => Math.min(...nums1)
//FIND => ZIP ZIPJS ZIP JS ZIP WORKAROUND ZIP ALTERNATE
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//SOL 1
var addedInteger = function(nums1, nums2) {
    return Math.min(...nums2) - Math.min(...nums1)
};
console.log(addedInteger(nums1,nums2))

//SOL 2 | ZIP WORKAROUND
function addedInteger(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const x = nums1.map((num, index) => [num, nums2[index]]);
  return x[0][1] - x[0][0];
}
console.log(addedInteger(nums1, nums2));  

console.log(Math.min(...nums2))
