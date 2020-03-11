/*
9 Use Cases for Array.reduce() 🐐

Use Case 1: Summing Numbers
One of the most straightforward use cases for reduce() is summing up a bunch of numbers. Let's say you have an array of integers and you want to find the total sum.
*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

/*
Boom! With just one line of code, you've calculated the sum of all elements in the array. The initial value of the accumulator is set to 0, and in each iteration, we add the current element to the accumulator.

** Bonus: If you choose to leave out the starting value, reduce will just use the first item in the array. However I tend to always include an initial value, so it's easier to read.

Use Case 2: Flattening Arrays
Have you ever found yourself with an array of arrays and thought, "I wish I could flatten this into a single array"?
*/

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

/*
In this example, we start with an empty array as the initial accumulator value. Then, in each iteration, we concatenate the current sub-array to the accumulator using the concat() method. By the end, we have a perfect flattened array.

I know that you can also do this with Array.flat(). However, it's important to know how to use reduce, in case you want to perform extra operations on each item.

Use Case 3: Grouping Objects
Imagine you have an array of objects, and you want to group them based on a specific property. reduce() is the perfect tool for the job.
*/

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Dave', age: 30 }
];

const groupedByAge = people.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = [];
  }
  acc[curr.age].push(curr);
  return acc;
}, {});

console.log(groupedByAge);
/*
Output:
{
  '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
  '30': [{ name: 'Bob', age: 30 }, { name: 'Dave', age: 30 }]
}
*/

/*
In this case, we use an object as the initial accumulator value. We check if the accumulator already has a property for the current age. If not, we create an empty array for that age. Then, we push the current object into the corresponding age array. By the end, we have an object where the keys are the ages, and the values are arrays of people with that age.

You can now also know the newer groupBy method, however, this tried and true classic is important to understand.

Use Case 4: Creating Lookup Maps
My personal favorite is using reduce() to create lookup maps from arrays. It's a game-changer when it comes to performance and code readability. Stop using those slow find() or filter() calls.
*/

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 499 },
];

const productMap = products.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(productMap);
/*
Output:
{
  '1': { id: 1, name: 'Laptop', price: 999 },
  '2': { id: 2, name: 'Phone', price: 699 },
  '3': { id: 3, name: 'Tablet', price: 499 }
}
*/

// Accessing a product by ID
const laptop = productMap[1];
console.log(laptop); // Output: { id: 1, name: 'Laptop', price: 999 }

/*
By using reduce() to create a lookup map, you can access elements by their unique identifier in constant time complexity. No more looping through the array to find a specific item.

Use Case 5: Counting Occurrences
Ever needed to count the occurrences of elements in an array? reduce() has got you covered.
*/

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCounts = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(fruitCounts);
/*
Output:
{
  'apple': 3,
  'banana': 2,
  'orange': 1
}
*/

/*
In this example, we initialize an empty object as the accumulator. For each fruit in the array, we check if it already exists as a property in the accumulator object. If it does, we increment its count by 1; otherwise, we initialize it to 1. The result is an object that tells us how many times each fruit appears in the array.

Use Case 6: Composing Functions
Functional programming enthusiasts will enjoy this one. reduce() is a powerful tool for composing functions. You can use it to create a pipeline of functions that transform data step by step.
*/

const add5 = (x) => x + 5;
const multiply3 = (x) => x * 3;
const subtract2 = (x) => x - 2;

const composedFunctions = [add5, multiply3, subtract2];

const result = composedFunctions.reduce((acc, curr) => curr(acc), 10);
console.log(result); // Output: 43

/*
In this example, we have an array of functions that we want to apply in sequence to an initial value of 10. We use reduce() to iterate over the functions, passing the result of each function as the input to the next one. The final result is the outcome of applying all the functions in the composed order.

Use Case 7: Implementing a Simple Redux-like State Management
If you've worked with Redux, you know how powerful it is for managing state in applications. Guess what? You can use reduce() to implement a simple Redux-like state management system.
*/

const initialState = {
  count: 0,
  todos: [],
};

const actions = [
  { type: 'INCREMENT_COUNT' },
  { type: 'ADD_TODO', payload: 'Learn Array.reduce()' },
  { type: 'INCREMENT_COUNT' },
  { type: 'ADD_TODO', payload: 'Master TypeScript' },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const finalState = actions.reduce(reducer, initialState);
console.log(finalState);
/*
Output:
{
  count: 2,
  todos: ['Learn Array.reduce()', 'Master TypeScript']
}
*/

/*
In this example, we have an initial state object and an array of actions. We define a reducer function that takes the current state and an action, and returns a new state based on the action type. By using reduce(), we can apply each action to the state in sequence, resulting in the final state. It's like having a mini-Redux.

Use Case 8: Generating Unique Values
Sometimes, you might have an array with duplicate values, and you need to extract only the unique ones. reduce() can help you accomplish that with ease.
*/

const numbers2 = [1, 2, 3, 2, 4, 3, 5, 1, 6];

const uniqueNumbers = numbers2.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

/*
Here, we initialize an empty array as the accumulator. For each number in the original array, we check if it already exists in the accumulator using the includes() method. If it doesn't, we push it into the accumulator array. The final result is an array containing only the unique values from the original array.

Use Case 9: Calculating Average
Want to calculate the average of a set of numbers? reduce() has got your back!
*/

const grades = [85, 90, 92, 88, 95];

const average = grades.reduce((acc, curr, index, array) => {
  acc += curr;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);

console.log(average); // Output: 90

/*
In this example, we initialize the accumulator to 0. We iterate over each grade and add it to the accumulator. When we reach the last element (checked using the index and array.length), we divide the accumulator by the total number of grades to calculate the average.

Performance Considerations 🏎️
While Array.reduce() is incredibly powerful and versatile, it's important to be aware of potential performance drawbacks, especially when dealing with large arrays or complex operations. One common pitfall is creating new objects or arrays in each iteration of reduce(), which can lead to excessive memory allocation and impact performance.

For example, consider the following code:
*/

const numbers3 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers3.reduce((acc, curr) => {
  return [...acc, curr * 2];
}, []);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/*
In this case, we're using the spread operator (...) to create a new array in each iteration, which can be inefficient. Instead, we can optimize the code by mutating the accumulator array directly:
*/

const numbers4 = [1, 2, 3, 4, 5];

const doubledNumbers2 = numbers4.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);

console.log(doubledNumbers2); // Output: [2, 4, 6, 8, 10]

/*
By mutating the accumulator array using push(), we avoid creating new arrays in each iteration, resulting in better performance.

Similarly, when working with objects, it's more efficient to mutate the accumulator object directly rather than creating a new object with the spread operator:
*/

const people2 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Dave', age: 30 }
];

const groupedByAge2 = people2.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = [];
  }
  acc[curr.age].push(curr);
  return acc;
}, {});

/*
By mutating the accumulator object directly, we optimize the performance of the reduce() operation.

However, it's worth noting that in some cases, creating new objects or arrays in each iteration may be necessary or more readable. It's important to strike a balance between performance and code clarity based on your specific use case and the size of the data you're working with.

Conclusion
There you have it. Nine incredible use cases that showcase the power and versatility of Array.reduce(). From summing numbers to flattening arrays, grouping objects to creating lookup maps, counting occurrences to composing functions, and even implementing state management and calculating averages, Array.reduce() proves to be a powerful tool in your js toolkit.

What do you think? What is your favorite array method and why?
Thanks for reading, and may the power of reduce() be with you. ✨🐐✨
*/
