const marvel_heroes = ["thor", "ironman", "hulk"];

const dc_heroes = ["superman", "batman", "flash"];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);

// Output: [ 'thor', 'ironman', 'hulk', [ 'superman', 'batman', 'flash' ] ]

// Explanation: Here, we have two arrays: marvel_heroes and dc_heroes. When we use the push method to add dc_heroes to marvel_heroes, it adds the entire dc_heroes array as a single element at the end of the marvel_heroes array. Therefore, the final output is an array containing the original marvel heroes followed by the dc_heroes array as a nested array.

// spead operator
const marvel_heroes1 = ["thor", "ironman", "hulk"];

const dc_heroes1 = ["superman", "batman", "flash"];

marvel_heroes1.push(...dc_heroes1);
console.log(marvel_heroes1);

// Output: [ 'thor', 'ironman', 'hulk', 'superman', 'batman', 'flash' ]

// Explanation: In this case, we use the spread operator (...) before dc_heroes1 when pushing it into marvel_heroes1. The spread operator expands the elements of the dc_heroes1 array, effectively adding each hero individually to the end of the marvel_heroes1 array. As a result, the final output is a single array containing all the heroes from both arrays without any nesting.

// |||||||||||||-=-=-=-=-=-=-=-=-=-=-=-=|||||||||||||||

const anotherArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  ["x", "y", "z", [11, 22, 33]],
];

const real_anotherArray = anotherArray.flat(Infinity);

console.log(real_anotherArray); // Output: [ 1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z', 11, 22, 33 ]

console.log(Array.isArray("Shivam")); // Output: false
console.log(Array.from("Shivam")); // Output: [ 'S', 'h', 'i', 'v', 'a', 'm' ]

console.log(Array.from({ name: "Shivam" })); // Output: [ undefined ]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [ 100, 200, 300 ]
