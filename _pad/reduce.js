// 9 Use Cases for Array.reduce() 🐐
// Use Case 1: Summing Numbers
// One of the most straightforward use cases for reduce() is summing up a bunch of numbers. Let's say you have an array of integers and you want to find the total sum.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Use Case 2: Flattening Arrays
// Have you ever found yourself with an array of arrays and thought, "I wish I could flatten this into a single array"?
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]