console.log(2 > 1); // true

// ----------avoid these kind of conversion

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log("10" == 10); // true
console.log("10" === 10); // false (string check)
console.log("shiv" == "shiv"); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// --------End----------

console.log(!true);
