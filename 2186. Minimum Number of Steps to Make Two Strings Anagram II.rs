// 2186. Minimum Number of Steps to Make Two Strings Anagram II
// = "leetcode"; t = "coats"
// LEARN => HASH TALLY HASH INIT
// MEM => myhash[char] = (myhash[char] || 0) + 1;(js)

//SOL
use std::collections::HashMap;

impl Solution {
    pub fn min_steps(s: String, t: String) -> i32 {
        let s_count = Solution::counter(&s);
        let t_count = Solution::counter(&t);
        let mut steps = 0;

        let mut unique_chars = s_count.keys().chain(t_count.keys()).cloned().collect::<Vec<_>>();
        unique_chars.sort_unstable();
        unique_chars.dedup();

        for char in unique_chars {
            steps += (s_count.get(&char).unwrap_or(&0) - t_count.get(&char).unwrap_or(&0)).abs();
        }

        steps
    }

    fn counter(s: &str) -> HashMap<char, i32> {
        let mut counter = HashMap::new();
        for c in s.chars() {
            *counter.entry(c).or_insert(0) += 1;
        }
        counter
    }
}

//CALL
fn main() {
  // Test cases
  let s1 = "leetcode".to_string();
  let t1 = "coats".to_string();
  println!("Test Case 1: {}", Solution::min_steps(s1.clone(), t1.clone())); // Output: 7

  let s2 = "night".to_string();
  let t2 = "thing".to_string();
  println!("Test Case 2: {}", Solution::min_steps(s2.clone(), t2.clone())); // Output: 0
}
