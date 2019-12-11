// 657. Robot Return to Origin
//moves = "UD"

impl Solution {
  pub fn judge_circle(moves: String) -> bool {
      let up_count = moves.chars().filter(|&c| c == 'U').count();
      let down_count = moves.chars().filter(|&c| c == 'D').count();
      let left_count = moves.chars().filter(|&c| c == 'L').count();
      let right_count = moves.chars().filter(|&c| c == 'R').count();
      
      up_count == down_count && left_count == right_count
  }
}

fn main() {
  let moves = "UDLR".to_string();
  println!("{}", Solution::judge_circle(moves)); // Output: true
}
