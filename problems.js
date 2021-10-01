// Part 3 - write code for javascript problems

// Problem 1 - Sum Zero: Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// this solution has runtime complexity O(n^2)

const addToZero = (array) => {
  if (array.length === 0) {
    console.log("array is empty");
    return false;
  }

  for (let i of array) {
    for (let j of array) {
      if (i + j === 0) {
        return true;
      }
    }
  }

  return false;
};

// test arrays
const testArray1 = [1, 2, 3, 4];
// should return false
const testArray2 = [1, 2, 3, -2];
// should return true
const testArray3 = [];
// should return false

addToZero(testArray3);
