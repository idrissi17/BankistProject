console.log("23");
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log("--------- ParsingInteger/float ------");
console.log(Number.parseInt("30px", 10));

console.log(Number.parseInt("e23", 15));

console.log(Number.parseInt("  2.5rem  "));
console.log(Number.parseFloat("  2.5rem  "));

//is Not a Number
console.log("--------- isNaN ------");
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log("--------- isFinite ------");
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));

// Checking if value is integer
console.log("--------- isInteger ------");
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
console.log(Number.isInteger("10"));
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Math Rounding

console.log("------ Sqrt ------");
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log("------ Max ------");
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

console.log("------ Min ------");
console.log(Math.min(5, 18, 23, 11, 2));

console.log("----- Area circle ------");
console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log("------ trunc ------");

// Math.trunc => 1.2 ---> 1  //   => 1.5 => 1 // => 42.84 => 42
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20));

// Rounding integers
console.log("---- round ----");
console.log(Math.round(23.3));
console.log(Math.round(0.4));
console.log(Math.round(23.9));
console.log(Math.round(5.5));

console.log("---- ceil ----");
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.ceil(1.2));
console.log(Math.ceil(2.6));

console.log("---- floor ----");
console.log(Math.floor(23.3));
console.log(Math.floor(23.6));

console.log("--- trunc / floor ----");
console.log(Math.trunc(23.5));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log("----- toFixed ----");
console.log((2.7).toFixed(0)); // return Sting
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); // Convert String to Number

///////////////////////////////////////
///////////////////////////////////////
// The Remainder Operator

console.log("----- remainder -----");
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

///////////////////////////////////////
// Numeric Separators

// 287,460,000,000
console.log("------ Numeric Separators ------");
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number("230_000"));
console.log(parseInt("230_000"));
