const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    "2019-11-20T07:15:33.035Z",
    "2020-01-15T09:48:16.867Z",
    "2020-02-23T06:04:23.907Z",
    "2020-03-18T14:18:46.235Z",
    "2020-04-10T16:33:06.386Z",
    "2020-05-05T14:43:26.374Z",
    "2020-06-22T18:49:59.371Z",
    "2020-07-10T12:01:20.894Z",
  ],
  currency: "GBP",
  locale: "en-GB",
};

// Account 4
const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    "2020-01-01T10:15:33.035Z",
    "2020-02-15T11:48:16.867Z",
    "2020-03-25T09:04:23.907Z",
    "2020-04-01T14:18:46.235Z",
    "2020-05-05T16:33:06.386Z",
  ],
  currency: "AUD",
  locale: "en-AU",
};

const accounts = [account1, account2, account3, account4];

// console.log("23");
// console.log(Number("23"));
// console.log(+"23");

// // Parsing
// console.log("--------- ParsingInteger/float ------");
// console.log(Number.parseInt("30px", 10));

// console.log(Number.parseInt("e23", 15));

// console.log(Number.parseInt("  2.5rem  "));
// console.log(Number.parseFloat("  2.5rem  "));

// //is Not a Number
// console.log("--------- isNaN ------");
// console.log(Number.isNaN(20));
// console.log(Number.isNaN("20"));
// console.log(Number.isNaN(+"20X"));
// console.log(Number.isNaN(23 / 0));

// // Checking if value is number
// console.log("--------- isFinite ------");
// console.log(Number.isFinite(20));
// console.log(Number.isFinite("20"));
// console.log(Number.isFinite(+"20X"));
// console.log(Number.isFinite(23 / 0));

// // Checking if value is integer
// console.log("--------- isInteger ------");
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));
// console.log(Number.isInteger("10"));
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// // Math Rounding

// console.log("------ Sqrt ------");
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log("------ Max ------");
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, "23", 11, 2));
// console.log(Math.max(5, 18, "23px", 11, 2));

// console.log("------ Min ------");
// console.log(Math.min(5, 18, 23, 11, 2));

// console.log("----- Area circle ------");
// console.log(Math.PI * Number.parseFloat("10px") ** 2);

// console.log("------ trunc ------");

// // Math.trunc => 1.2 ---> 1  //   => 1.5 => 1 // => 42.84 => 42
// console.log(Math.trunc(Math.random() * 6) + 1);
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// // 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// // Rounding integers
// console.log("---- round ----");
// console.log(Math.round(23.3));
// console.log(Math.round(0.4));
// console.log(Math.round(23.9));
// console.log(Math.round(5.5));

// console.log("---- ceil ----");
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));
// console.log(Math.ceil(1.2));
// console.log(Math.ceil(2.6));

// console.log("---- floor ----");
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.6));

// console.log("--- trunc / floor ----");
// console.log(Math.trunc(23.5));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // Rounding decimals
// console.log("----- toFixed ----");
// console.log((2.7).toFixed(0)); // return Sting
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2)); // Convert String to Number

// ///////////////////////////////////////
// ///////////////////////////////////////
// // The Remainder Operator

// console.log("----- remainder -----");
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// ///////////////////////////////////////
// // Numeric Separators

// // 287,460,000,000
// console.log("------ Numeric Separators ------");
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// console.log(transferFee1, transferFee2);

// const PI = 3.1415;
// console.log(PI);

// console.log(Number("230_000"));
// console.log(parseInt("230_000"));

// ///////////////////////////////////////
// console.log("------ BigInt ------");
// // Working with BigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(4838430248342043823408394839483204n);
// console.log(BigInt(48384302));

// // Operations
// console.log(10000n + 10000n);
// console.log(36286372637263726376237263726372632n * 10000000n);
// // console.log(Math.sqrt(16n));

// const huge = 20289830237283728378237n;
// const num = 23;
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == "20");

// console.log(huge + " is REALLY big!!!");

// // Divisions
// console.log(11n / 3n);
// console.log(10 / 3);

///////////////////////////////////////
// Creating Dates

// Create a date

const now = new Date();
console.log(now);

console.log(new Date(account1.movementsDates[0]));

const futur = new Date(2025, 2, 11, 20, 30);
console.log(futur.getFullYear());
console.log(futur.getMonth());
console.log(futur.getDate());
console.log(futur.getDay());
console.log(futur.getHours());
console.log(futur.getSeconds());
console.log(futur.getMinutes());
console.log(futur.toISOString());
console.log(futur.getTime());

console.log(Date.now());
futur.setFullYear(2040);
console.log(futur);

///////////////////////////////////////
// Operations With Dates
console.log("---------- Operations With Dates --------");
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
const days2 = calcDaysPassed(new Date(2001, 6, 16), new Date(2024, 7, 28));
console.log(days1);
console.log(days2);

// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  // useGrouping: false,
};

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
///////////////////////////////////////
// Timers

// setTimeout  --> excuting one time 
console.log("------ Timer ------");

const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval  --> 
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 10000);
