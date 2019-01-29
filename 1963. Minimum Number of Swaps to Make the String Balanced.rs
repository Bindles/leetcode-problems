// 1963. Minimum Number of Swaps to Make the String Balanced
//s = "][]["
//SOL
impl Solution {
  pub fn min_swaps(s: String) -> i32 {
      let mut open_bracket_count = 0;
      
      for char in s.chars() {
          if char == '[' {
              open_bracket_count += 1;
          } else if open_bracket_count > 0 {
              open_bracket_count -= 1;
          }
      }
      (open_bracket_count + 1) / 2
  }
}
