// 832. Flipping an Image
image = [[1,1,0],[1,0,1],[0,0,0]]
//SOL 2
var flipAndInvertImage = function(image) {
  const reversed_image = image.map(row => row.reverse());
  return reversed_image.map(sub => sub.map(num => 1 - num));
};
console.log(flipAndInvertImage(image))

//SOL 1 CLEANED THEN ORIG
var flipAndInvertImage = function(image) {
  const reversed_image = image.map(row => row.reverse());
  return reversed_image.map(sub => {
    return sub.map(num => num === 0 ? 1 : 0)
  })
}
var flipAndInvertImage = function(image) {
  reversed_image = image.map(row => row.reverse());
  console.log(reversed_image)
  return reversed_image.map(sub => {
    return sub.map(num => num === 0 ? 1 : 0)
  })
}
console.log(flipAndInvertImage(image))

//WORKING . . . [UNSUCCESS]
var flipAndInvertImage = function(image) {
  reversed_image = image.map(row => row.reverse());
  console.log(reversed_image)
  reversed_image.map(sub => {
    sub.map(num => {
      if (num == 0) {
        num = 1;
      } else {
        num = 0;
      }
    })
  })
}
console.log(flipAndInvertImage(image))

//MISC
let str="Hello"
console.log(Array.from(str).reverse())
console.log(str.split('').reverse())


// def flip_and_invert_image(image)
//   image.map(&:reverse).map do |ea|
//   ea.map { |el| el == 0 ? 1 : 0 }
//   end
// end
  
// p flip_and_invert_image(image)