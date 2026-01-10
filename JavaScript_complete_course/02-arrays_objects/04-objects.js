// const tinderUser = new Object(); -> singlton object using constructor

const tinderUser1 = {}; // -> non singleton object using object literal

tinderUser1.id = "123a";
tinderUser1.name = "shivam";
tinderUser1.isLoggedIn = false;

console.log(tinderUser1);

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    firstName: "Shivam",
    lastName: "Kumar",
  },
};

console.log(regularUser.fullname.firstName); // Shivam
console.log(regularUser["fullname"]["lastName"]); // Kumar

//1. -=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { obj1, obj2 };
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = { ...obj1, ...obj2 };
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// 2. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
];

console.log(users[1].email); //

// 3. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log(tinderUser1);

Object.keys(tinderUser1);
Object.values(tinderUser1);
Object.entries(tinderUser1);

console.log(
  Object.keys(tinderUser1),
  Object.values(tinderUser1),
  Object.entries(tinderUser1)
);

console.log(tinderUser1.hasOwnProperty("name")); // true
console.log(tinderUser1.hasOwnProperty("age")); // false

// 4. -=-=-=-=-=-=-Obejct Destructuring =-=-=-=-=-=-=-=-=

const course = {
  coursename: "js complete course",
  price: "999",
  courseInstructor: "shivam kumar",
};
course.price = "799"; // update price
console.log(course.price); // 799

const { courseInstructor: instructor } = course; // destructuring
console.log(instructor); // shivam kumar

console.log(instructor); // shivam kumar

[{}, {}, {}];

// array destructuring
const myArray = ["value1", "value2", "value3", "value4"];
const [first, second, ...restValues] = myArray;
console.log(first); // value1
console.log(second); // value2

console.log(restValues); // [ 'value3', 'value4' ]
