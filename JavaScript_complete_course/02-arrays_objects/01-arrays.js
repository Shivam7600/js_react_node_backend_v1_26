// array

const myArray = [0, 1, 2, 3, 4, 5, 6];

// shallow copy vs deep copy

const myArray2 = myArray; // shallow copy
myArray2[0] = 100;
console.log("myArray:", myArray); // myArray: [100, 1, 2, 3, 4, 5, 6]
console.log("myArray2:", myArray2); // myArray2: [100, 1, 2, 3, 4, 5, 6]

// deep copy
const myArray3 = [...myArray]; // spread operator
myArray3[0] = 0;
console.log("myArray:", myArray); // myArray: [100, 1, 2, 3, 4, 5, 6]
console.log("myArray3:", myArray3); // myArray3: [0, 1, 2, 3, 4, 5, 6]

// array methods

myArray.push(7); // adds 7 at the end
myArray.pop(); // removes last element
myArray.unshift(-1); // adds -1 at the beginning (not good for performance)
myArray.shift(); // removes first element

console.log(myArray);

console.log(myArray.includes(12)); // false
console.log(myArray.indexOf(3)); // [100, 1, 2, 3, 4, 5, 6]

const newArray = myArray.join(); // converts array to string
console.log(newArray); // "100,1,2,3,4,5,6"
console.log(myArray); // [100, 1, 2, 3, 4, 5, 6]

// slice and splice

const arr1 = [1, 2, 3, 4, 5];
console.log("A", arr1);

const myn1 = arr1.slice(1, 4); // does not modify original array
console.log("B", myn1); // [2, 3, 4]
console.log(arr1); // [1, 2, 3, 4, 5]

// Recent edits start here
const arr2 = [1, 2, 3, 4, 5];
const myn2 = arr2.splice(1, 4); // modifies original array
console.log("C", myn2); // [2, 3, 4, 5]
console.log(arr2); //
// End of recent edits
