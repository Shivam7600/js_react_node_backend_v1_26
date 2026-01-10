const score = 400;

const balance = new Number(100);

console.log(score, balance);

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 23.8965;
console.log(otherNumber.toPrecision(4)); // 23.90

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

// -=-=-=-=-=-=-=-=-Math Library=-=-=-=-=-=-=-=-=-=-=

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.random() * 10);

console.log(Math.floor(Math.random() * 10)); // 0-9
console.log(Math.floor(Math.random() * 10) + 1); // 1-10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
