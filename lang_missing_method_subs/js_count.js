//JS .count()
//array.filter((x) => x === <value to match>).length
nums=[1,2,3,2,4,5]
console.log(
  nums.filter(x => x === 2).length
)

function count(val){
  return this.filter(x => x === val).length
}
console.log(
  nums.count(2)
)