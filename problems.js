// Part 3 - write code

// Problem 1 - Sum Zero: Write a function that takes in an array of numbers.The function should return True if any two numberss in list sum to 0, and false otherwise.

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem 2 - Unique Characters: Write a function that takes a single word as a string. It should return true if that word contains only unique characters. Return false otherwise.

// this solution has O(n) runtime complexity

const hasUniqueChars = (str) => {
  if (!str) {
    return false;
  }

  let chars = {};

  for (let char of str.toLowerCase()) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let key in chars) {
    if (chars[key] > 1) {
      return false;
    }
  }

  return true;
};

const testStr1 = "abcdef";
// should return true
const testStr2 = "abcabc";
// should return false
const testStr3 = "chocolate";
// should return false
const testStr4 = "";
// should return false

hasUniqueChars(testStr3);

// ========================================================

// Problem 3 - Pangram Sentence: A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// this soltution has O(n) runtime complexity

const isPangram = (str) => {
  if (str.length === 0) {
    return false;
  }

  let charMap = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  let strAsSplitArr = str.toLowerCase().split("");

  for (let char of strAsSplitArr) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let key in charMap) {
    if (charMap[key] === 0) {
      return false;
    }
  }

  return true;
};

const testStr1 = "The quick brown fox jumps over the lazy dog!";
// should return true
const testStr2 = "I like cats, but not mice";
// should return false
const testStr3 = "";
// should return false

isPangram(testStr3);

// ========================================================

// Problem 4 - Longest Word: Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// this solution has O(n) runtime compelexity

const findLongestWord = (arr) => {
  if (arr.length === 0) {
    return "The array is empty";
  }

  let longestStrLength = 0;

  for (let str of arr) {
    let currentLength = str.length;

    if (currentLength > longestStrLength) {
      longestStrLength = currentLength;
    }
  }

  return longestStrLength;
};

testArr1 = ["hello", "welcome", "how", "are", "you"];
// should return 7
testArr2 = ["hello", "world"];
// should return 5
testArr3 = ["chocolate", "nutella"];
// should return 9
testArr4 = ["nutella", "is", "awesome"];
// should return 7
testArr5 = [];
// "array is empty"

findLongestWord(testArr5);
