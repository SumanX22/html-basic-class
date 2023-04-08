const arr = [1, 2, 3, 4, 5, 6]; // array of numbers

// nothing but a fancy for loop, but it returns a new array

// PROBLEM STATEMENT: I have an array of numbers. get the array of squares of that numbers
const newArr = arr.map((element, index) => {
  return element * element;
});

console.log(newArr);
