// 821. Shortest Distance to a Character
//s = "loveleetcode"; c = "e"
impl Solution {
  pub fn shortest_to_char(s: String, c: char) -> Vec<i32> {
      let mut res = Vec::new();
      let chars: Vec<char> = s.chars().collect();
      let nums: Vec<usize> = chars.iter().enumerate().filter_map(|(i, &ch)| if ch == c { Some(i) } else { None }).collect();

      for (i, _) in chars.iter().enumerate() {
          let closest = nums.iter().map(|&x| (x as i32 - i as i32).abs()).min().unwrap();
          res.push(closest);
      }
      res
  }
}
