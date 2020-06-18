// 3131. Find the Integer Added to Array I
// nums1 = [2,6,4]; nums2 = [9,7,5]
// nums1 = [10]; nums2 = [5]
impl Solution {
  pub fn added_integer(mut nums1: Vec<i32>, mut nums2: Vec<i32>) -> i32 {
      // Sort both input vectors
      nums1.sort();
      nums2.sort();
      
      // Calculate the difference between the first element of the sorted second vector
      // and the first element of the sorted first vector
      nums2[0] - nums1[0]
  }
}

