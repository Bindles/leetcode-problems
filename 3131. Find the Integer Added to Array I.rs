// 3131. Find the Integer Added to Array I
// nums1 = [2,6,4]; nums2 = [9,7,5]
// nums1 = [10]; nums2 = [5]
impl Solution {
  pub fn added_integer(mut nums1: Vec<i32>, mut nums2: Vec<i32>) -> i32 {
      nums1.sort();
      nums2.sort();

      nums2[0] - nums1[0]
  }
}

fn main() {
  let nums1 = vec![1, 3, 2];
  let nums2 = vec![4, 5, 6];
  println!("{}", Solution::added_integer(nums1, nums2));
}
