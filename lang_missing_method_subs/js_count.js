//JS .count()
//array.filter((x) => x === <value to match>).length
nums=[1,2,3,2,4,5]
console.log(
  nums.filter(x => x === 2).length
)

//count function
Array.prototype.count = function(val) {
  return this.filter(x => x === val).length;
};

// Example usage
var nums = [1, 2, 3, 2, 4, 5];
console.log(nums.count(2)); // Output: 2


//count function 2
function count(array, val) {
  return array.filter(x => x === val).length;
}

// Example usage
var nums = [1, 2, 3, 2, 4, 5];
console.log(count(nums, 2)); // Output: 2





//DOESNT WORK
// function count(val){
//   return this.filter(x => x === val).length
// }
// console.log(
//   nums.count(2)
// )
