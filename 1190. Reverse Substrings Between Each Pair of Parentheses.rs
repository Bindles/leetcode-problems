// 1190. Reverse Substrings Between Each Pair of Parentheses
// LEARN THIS REVISIT STACK 
// = "(u(love)i)"
// = "(ed(et(oc))el)"

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

