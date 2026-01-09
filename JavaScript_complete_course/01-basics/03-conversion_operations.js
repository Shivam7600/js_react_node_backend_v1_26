let score = "23abc";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number (23abc)
console.log(valueInNumber); // NaN

// "23" -> 33
// "23abc" -> NaN
// true -> 1; false -> 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 -> true
// 0 -> false
// "" -> false
// "shivam" -> true

let someNumber = 45;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

////////////// Operations ///////////////

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 ** 4);

let str1 = "hello ";
let str2 = "shivam";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32 (due to ecmaScript documentation)

console.log(+true); // 1
console.log(-true); //-1
console.log(+""); // 0
console.log(-""); //-0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // (confusing code, not preferred)

let gameCounter = 100;
console.log(gameCounter); //100

gameCounter++;
console.log(gameCounter); //101

++gameCounter;
console.log(gameCounter); //102
