// 1190. Reverse Substrings Between Each Pair of Parentheses
// LEARN THIS REVISIT STACK 
// = "(u(love)i)"
// = "(ed(et(oc))el)"

//HAD TO GET HELP :(
//COULDNT SOLVE WITHOUGHT HELP

//CORRECT SOL
impl Solution {
  pub fn reverse_parentheses(s: String) -> String {
      fn inner_rev(chs: &mut std::str::Chars) -> String {
          let mut res = String::new();
          while let Some(c) = chs.next() {
              if c == '(' {
                  let s = inner_rev(chs);
                  res = [res, s].concat();
              } else if c == ')' {
                  return res.chars().rev().collect::<String>();
              } else {
                  res.push(c);
              }
          }
          return res;
      }
      inner_rev(&mut s.chars())
  }
}

//WORKING
//HAVING TROUBLE | INCORRECT

//SOL
impl Solution {
  pub fn reverse_parentheses(s: String) -> String {
      let mut stack: Vec<String> = Vec::new();
      for char in s.chars() {
          if char == ')' {
              let mut temp: Vec<String> = Vec::new();
              while let Some(top) = stack.last() {
                  if top != &'('.to_string() {
                      temp.push(stack.pop().unwrap());
                  } else {
                      break;
                  }
              }
              stack.pop();
              stack.extend(temp.into_iter().rev());
          } else {
              stack.push(char.to_string());
          }
      }
      stack.join("")
  }
}


//
impl Solution {
  pub fn reverse_parentheses(s: String) -> String {
      let mut stack: Vec<String> = Vec::new();
      for char in s.chars() {
          if char == ')' {
              let mut temp = String::new();
              while let Some(top) = stack.pop() {
                  if top == "(".to_string() {
                      break;
                  }
                  temp.insert_str(0, &top);
              }
              stack.push(temp);
          } else {
              stack.push(char.to_string());
          }
      }
      stack.join("")
  }
}

//
impl Solution {
  pub fn reverse_parentheses(s: String) -> String {
      let mut stack: Vec<String> = Vec::new();
      let mut current_str = String::new();

      for char in s.chars() {
          match char {
              '(' => {
                  stack.push(current_str.clone());
                  current_str.clear();
              }
              ')' => {
                  let mut temp = stack.pop().unwrap().chars().rev().collect::<String>();
                  current_str = stack.pop().unwrap() + &temp;
              }
              _ => current_str.push(char),
          }
      }
      current_str
  }
}


//
impl Solution {
  pub fn reverse_parentheses(s: String) -> String {
      let mut stack = Vec::new();
      for c in s.chars() {
          if c == ')' {
              let mut temp = Vec::new();
              while let Some(top) = stack.pop() {
                  if top == '(' {
                      break;
                  }
                  temp.push(top);
              }
              stack.extend(temp.into_iter().rev());
          } else {
              stack.push(c);
          }
      }
      stack.iter().collect()
  }
}
