// Yes, you can also use the reduce() method to create a lookup map for products by their name instead of their id. Here's how you can do it:
var products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 499 },
];

var productMapByName = products.reduce((acc, curr) => {
  acc[curr.name] = curr; // Set the product's name as the key and the product object as the value.
  return acc; // Return the accumulator for the next iteration.
}, {}); // Initialize the accumulator as an empty object.

console.log(productMapByName);
/*
Output:
{
  'Laptop': { id: 1, name: 'Laptop', price: 999 },
  'Phone': { id: 2, name: 'Phone', price: 699 },
  'Tablet': { id: 3, name: 'Tablet', price: 499 }
}
*/

// Accessing a product by name
var phone = productMapByName['Phone'];
console.log(phone); // Output: { id: 2, name: 'Phone', price: 699 }
// Explanation
// Array of Objects:
// The products array contains a list of product objects. Each product has an id, name, and price.

var products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 499 },
];
// Using reduce() to Create a Lookup Map by Name:
// The reduce() method is used to iterate over the products array and build an object (productMapByName) where each key is the name of a product, and the value is the product object itself.

var productMapByName = products.reduce((acc, curr) => {
  acc[curr.name] = curr; // Set the product's name as the key and the product object as the value.
  return acc; // Return the accumulator for the next iteration.
}, {}); // Initialize the accumulator as an empty object.
// Output:
// After the reduce() method completes, productMapByName will be an object where you can quickly access a product by its name.

console.log(productMapByName);
/*
Output:
{
  'Laptop': { id: 1, name: 'Laptop', price: 999 },
  'Phone': { id: 2, name: 'Phone', price: 699 },
  'Tablet': { id: 3, name: 'Tablet', price: 499 }
}
*/

// Benefits
// Performance:

// Using a lookup map (an object) allows you to access products by their name in varant time, 
// �
// (
// 1
// )
// O(1), which is much faster than using methods like find() or filter() that have to iterate over the array, 
// �
// (
// �
// )
// O(n).
// Code Readability:

// The code becomes cleaner and more readable. Instead of using a loop or higher-order function like find() to get a product by its name, you can directly access it using productMapByName[name].
// Example Usage
// Once the lookup map is created, you can easily access any product by its name:

var phone = productMapByName['Phone'];
console.log(phone); // Output: { id: 2, name: 'Phone', price: 699 }
// This demonstrates how reduce() can be used effectively to create a performant and readable solution for accessing data in an array by a specific property, such as name.






