// 832. Flipping an Image
//image = [[1,1,0],[1,0,1],[0,0,0]]
//SOL
impl Solution {
  pub fn flip_and_invert_image(image: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
      image.into_iter().map(|row| {
          row.into_iter().rev().map(|num| 1 - num).collect()
      }).collect()
  }
}

//SOL LONG
impl Solution {
  pub fn flip_and_invert_image(mut image: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
      for h in 0..image.len() {
          image[h].reverse();
      }
      for i in 0..image.len() {
          for j in 0..image[0].len() {
              if image[i][j] == 0 {
                  image[i][j] = 1;
              }else {
                  image[i][j] = 0;
              }
          }
      }
      image
  }
}
