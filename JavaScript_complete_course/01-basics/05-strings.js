const name = "shivam kumar";

const repoCount = 10;

// console.log(name + repoCount + " Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shivam-singh");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); // 12
console.log(gameName.charAt(3)); // v
console.log(gameName.indexOf("h")); // 1

let s = `
This is a 
Multiline
string`;

console.log(s);

const newString = gameName.substring(0, 4); // Shivam-singh -> Shiv
console.log(newString);

const anotherString = gameName.substring(-8, 4); // Shiv
// const anotherString = gameName.slice(-8, 4); // no result in fedora linux

console.log(anotherString);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const newStringOne = "    shivam       ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shiivam%20singh";

console.log(url.replace("%20", "-"));
console.log(url.includes("sundar")); // false

console.log(gameName.split("-")); //  ['Shivam', 'singh']
