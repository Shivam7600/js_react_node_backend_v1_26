const accountId = 144553;
let accountEmail = "shivam@gmail.com";
var accountPassword = "12345";
let accountState;

accountCity = "Delhi"; // not preferred

// accountId = 2;       -> not allowed

accountEmail = "abc@gmail.com";
accountPassword = "12321";
accountCity = "bengaluru";
console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

console.log(typeof accountCity);

/*
in JavaScrip we have only 
1 way to declare - const 
2 ways to declare var - var and let

now we use only let (block scoped)**

*/

// prefer not to use var due to block scoped and functional scope
