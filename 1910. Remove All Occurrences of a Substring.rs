// 1910. Remove All Occurrences of a Substring
//s = "daabcbaabcbc"; part = "abc"
struct Solution;

impl Solution {
    pub fn remove_occurrences(mut s: String, part: String) -> String {
        while let Some(pos) = s.find(&part) {
            s.drain(pos..pos + part.len());
        }
        s
    }
}

fn main() {
    let s = "daabcbaabcbc".to_string();
    let part = "abc".to_string();
    println!("{}", Solution::remove_occurrences(s, part)); // Outputs "dababcbc"
}
