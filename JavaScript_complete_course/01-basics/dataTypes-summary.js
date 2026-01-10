// 1. primitive data types

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100; // number
const scoreValue = 100.2; // number

const isLoggedIn = true; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigNumber1 = 7563764823764873; // number
const bigNumber2 = 7563764823764873n; // bigInt

console.log(typeof bigNumber1);
console.log(typeof bigNumber2);

// -------------**--------------

// 2. Reference (Non-primitive data types)
// Array, Objects, Functions

const heros = ["shaktiman", "ironman", "thor", "doctorstrange"];

let myObj = {
  name: "shivam",
  age: 25,
};

// function1(){};

const myFunction = function () {
  console.log("Hello  World");
};

console.log(typeof heros, typeof myObj, typeof myFunction);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// stack (Primitive) and heap(Non-primitive)

let n1 = "youtube-channel";

let n2 = n1;
n2 = "youtube-ads";

console.log(n1); // different value in both n1 and n2 due to stack memory
console.log(n2); // different value in both n1 and n2 due to stack memory

let user1 = {
  email: "user@google.com",
  upi: "user@ybl",
};

let user2 = user1;
user2.email = "user2@google.com";

console.log(user1); // same value in both user1 and user2 due to heap memory
console.log(user2); // same value in both user1 and user2 due to heap memory
