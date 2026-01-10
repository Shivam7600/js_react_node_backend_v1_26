// Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025, 0, 23);
// let myCreatedDate = new Date(2025, 0, 23, 5, 3);
let myCreatedDate = new Date("2025-01-23");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let newDate = new Date();

console.log("Month : ", newDate.getMonth() + 1); // 0-11
console.log("Date : ", newDate.getDate());
console.log("Day : ", newDate.getDay()); // 0-6
console.log("Year : ", newDate.getFullYear());

console.log("Hours : ", newDate.getHours());
console.log("Minutes : ", newDate.getMinutes());
console.log("Seconds : ", newDate.getSeconds());
console.log("Milliseconds : ", newDate.getMilliseconds());

// ${newDate.getDay()} and the time

newDate.toLocaleString("default", {
  weekday: "long",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Kolkata",
});
