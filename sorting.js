"use strict";

function arrayValuesTypes(arr) {
  const map1 = arr.map((x) => typeof x);
  return map1;
}

console.log(arrayValuesTypes(arrayValuesTypes([["hello", 1], 10])));

//moves zeroes

function moveZeros(arr) {
  const result = arr
    .filter((x) => x != 0)
    .sort()
    .concat(arr.filter((x) => x == 0));
  return result;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(
  moveZeros([9, 0.0, 0, 9, 1, 2, 0, 1, 0, 1, 0.0, 3, 0, 1, 9, 0, 0, 0, 0, 9])
);

//Even and Odd Strings

function evenOddString(txt) {
  const result = txt
    .split("")
    .filter((x) => txt.indexOf(x) % 2 == 0)
    .join("")
    .concat(
      " ",
      txt
        .split("")
        .filter((x) => txt.indexOf(x) % 2 != 0)
        .join("")
    );
  return result;
}

console.log(evenOddString("mubashir"));
console.log(evenOddString("edabit"));

// Age Difference Between Spouses

function ageDifference(ages) {
  const result = ages
    .sort((a, b) => a - b)
    .splice(-2)
    .reduce((a, b) => b - a, 0);

  return result;
}

console.log(ageDifference([29, 1, 6, 8, 28]));
console.log(ageDifference([43, 86, 49, 86]));

// Simple Letters

function longestString(str1, str2) {
  let arr = str1.concat(str2).split("");
  let result = [...new Set(arr)].sort().join("");
  return result;
}
console.log(longestString("mubashir", "edabit"));

// Find the Largest Number in an Array

function findLargestNum(arr) {
  const result = arr.reduce((a, b) => Math.max(a, b));
  return result;
}

console.log(findLargestNum([4, 5, 1, 3]));
console.log(findLargestNum([13, 27, 18, 26]));

//Sort by String Length

function sortByLength(arr) {
  const result = arr.sort((a, b) => a.length - b.length);
  return result;
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

//Find the Largest Numbers in a Group of Arrays

function findLargestNums(arr) {
  const result = arr.map((x) => Math.max(...x));
  return result;
}
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);

// Sort Numbers in Descending Order

function sortDescending(num) {
  const result = Number(num.toString().split("").reverse().join(""));
  return result;
}
console.log(sortDescending(123));

//Maximum Possible Total

function maxTotal(nums) {
  const result = nums
    .sort((a, b) => b - a)
    .splice(0, 5)
    .reduce((a, b) => a + b, 0);
  return result;
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));

//Most Left Digit

function leftDigit(num) {
  const result = Number(
    num
      .split("")
      .filter((x) => Number(x))
      .splice(0, 1)
      .join("")
  );
  return result;
}
console.log(leftDigit("TrAdE2W1n95!"));
console.log(leftDigit("V3r1ta$"));

//Learn Lodash (2): Compact
function compact(arr) {
  const result = arr.filter((x) => x);
  return result;
}
console.log(compact([1, 0, false, null, undefined, "banana"]));
console.log(
  compact(
    [
      {
        color: "red",
        make: "toyota",
      },
      {
        color: "blue",
        make: "mazda",
      },
    ],
    null
  )
);

// Sort the Unsortable

function sortIt(arr) {
  const result = arr.flat([...arr.sort()]);
  return result;
}
console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]));

// Find the Missing Number

function missingNum(arr) {
  const result =
    ((arr.length + 1) * (arr.length + 1 + 1)) / 2 -
    arr.reduce((a, b) => a + b, 0);
  return result;
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]));

// The Frugal Gentleman

function chosenWine(wines) {
  const result = wines
    .sort((a, b) => a.price - b.price)
    .filter((x) => x == wines[1])
    .find((i) => i).name;
  return result;
}
console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 },
  ])
);
console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 389", price: 109.99 },
    { name: "Wine 44", price: 38.44 },
    { name: "Wine 72", price: 22.77 },
  ])
);

//Sorting Time
function sortArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      result.push(arr[i + 1]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(sortArray([2, -5, 1, 4, 7, 8]));
