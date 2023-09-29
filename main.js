function nextInLine(arr, item) {
  // Only change code below this line
 arr.push(item);

  // Remove and store the first element in the array
  const removedItem = arr.shift();

  // Return the removed item
  return removedItem;}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
