// 2186. Minimum Number of Steps to Make Two Strings Anagram II
// = "leetcode"; t = "coats"
// LEARN => HASH TALLY HASH INIT
// MEM => myhash[char] = (myhash[char] || 0) + 1;(js)
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
