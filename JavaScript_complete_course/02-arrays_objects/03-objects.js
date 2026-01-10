// singleton => used and made by constructor function,
// Object.create() -> constructor method and singleton.

// literal vs construtor

// object literal

const mySym = Symbol("key1");

const jsUser = {
  name: "shivam",
  "Full Name": "Shivam Kumar",
  [mySym]: "myKey1value", // symbol as key
  age: 18,
  email: "shivamkumar071@gmail.com",
  isLogegedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

console.log(jsUser.name);
console.log(jsUser["email"]);

console.log(jsUser[mySym]);

// update

jsUser.email = "shivam@microsoft.com";
console.log(jsUser.email); // email = "shivam@microsoft.com"

// Object.freeze(jsUser); // prevent any changes to object

jsUser.email = "shivam@chatgpt.com"; // email = "shivam@microsoft.com"
console.log(jsUser.email); // no change

// 1. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
jsUser.greeting = function () {
  console.log("Hello jsUser");
};

jsUser.greeting2 = function () {
  console.log(`Hello ${this.name}`); // this -> refers to current object
};

jsUser.greeting(); // Hello jsUser
jsUser.greeting2(); // Hello shivam
