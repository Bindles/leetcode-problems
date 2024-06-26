// 2710. Remove Trailing Zeros From a String
//num = "51230100"
//SOL
impl Solution {
  pub fn remove_trailing_zeros(num: String) -> String {
      num[..num.len() - num.bytes().rev().take_while(|&x| x == '0' as u8).count()].to_string()
  }
}

//SOL | RUST | DOES NOT WORK 
impl Solution {
  pub fn remove_trailing_zeros(num: String) -> String {
      let num_reversed: String = num.chars().rev().collect();
      let parsed_int = num_reversed.parse::<u64>().unwrap();
      let result = parsed_int.to_string();
      result.chars().rev().collect()
  }
}
