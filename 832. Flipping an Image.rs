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
