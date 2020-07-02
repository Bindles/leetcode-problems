// 2859. Sum of Values at Indices With K Set Bits
// nums = [5,10,1,5,2]; k = 1
//SOL
impl Solution {
  pub fn sum_indices_with_k_set_bits(nums: Vec<i32>, k: i32) -> i32 {
      nums.iter().enumerate().map(|(i, &num)| {
          if i.count_ones() == k as u32 {
              num
          } else {
              0
          }
      }).sum()
  }
}

fn main() {
  let nums = vec![5,10,1,5,2];
  let k = 1;
  println!("{}", Solution::sum_indices_with_k_set_bits(nums, k)); 
}

