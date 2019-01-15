let str="Hello"
console.log(Array.from(str).reverse())
console.log(str.split('').reverse())

image = [[1,1,0],[1,0,1],[0,0,0]]
// def flip_and_invert_image(image)
//   image.map(&:reverse).map do |ea|
//   ea.map { |el| el == 0 ? 1 : 0 }
//   end
// end
  
// p flip_and_invert_image(image)

function flip(image) {
  reversed_image = image.map(row => row.reverse());
  console.log(reversed_image)
  return reversed_image.map(sub => {
    return sub.map(num => num === 0 ? 1 : 0)
  })
}
console.log(flip(image))

//WORKING . . . [UNSUCCESS]
function flip(image) {
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
console.log(flip(image))