// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// Function(required) : A function to run for each element in the array.and takes three arguments:

// 1. currentValue : The value of the current element
// // 2. index(Optional) : The index of the current element
// // 3. array(Optional) : The array that forEach() is being applied to

// It does not return a value. It returns undefined. It is used to perform an action for each element in an array.
// it does not change the original array but can be used to change the original array.

// ++++example++++
const fruits = ["apple", "banana", "orange"];
fruits.forEach((value, index, array) => {
  //The function that's used in forEach is called callback function and here
  // its and arrowfunction.

  console.log(value, index, array);
});

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum); // 125
// console.log(numbers); // [65, 44, 12, 4] - original array is not changed
// console.log(myFunction); // [Function: myFunction] - myFunction is a function and it is not changed

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(numbers);
// console.log(arr[index]); // This line will throw an error because 'arr' is not defined in this scope.
// It is only defined within the myFunction scope.
console.log(myFunction); // [Function: myFunction] - myFunction is a function and it is not changed
myFunction(3);
