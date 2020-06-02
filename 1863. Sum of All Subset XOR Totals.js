// 1863. Sum of All Subset XOR Totals
nums = [1,3]
function subsetXorSum(nums) {
  function combinations(arr, num) {
      if (num === 0) return [[]];
      if (arr.length === 0) return [];
      let [first, ...rest] = arr;
      let withFirst = combinations(rest, num - 1).map(comb => [first, ...comb]);
      let withoutFirst = combinations(rest, num);
      return withFirst.concat(withoutFirst);
  }

  function xorReduce(arr) {
      return arr.reduce((acc, num) => acc ^ num, 0);
  }

  let total = 0;
  for (let num = 1; num <= nums.length; num++) {
      let combs = combinations(nums, num);
      for (let comb of combs) {
          total += xorReduce(comb);
      }
  }
  return total;
}
console.log(subsetXorSum(nums));  // Output: 6
var nums = [1, 2, 3];
console.log(subsetXorSum(nums));  // Output: 12
