// FILTER FOR ARRAy

const arr = [1, 2, 8, 3, 4, 5];

// filter takes a function as parameter and returns a boolean value
// if the returned value is true, then the element is filtered in
// else it is filtered out

// PRBOLEM STATEMENT: give an array of all elements greater than or equal to 4
const arr_filtered = arr.filter((element, index) => {
  console.log(element);

  if (element <= 4) return true;
  else return false;
});

const arr_filtered_better = arr.filter((element, index) => element <= 4);

console.log("-----------------------");

console.log(arr);
console.log(arr_filtered);
console.log(arr_filtered_better);
