// TypeError: getFullYear() is not a Function in JavaScript

// EXAMPLE 1 - Use the `new` keyword when creating the Date() constructor

// ✅ Correct
const d1 = new Date('Sept 24, 22 13:20:18').getFullYear();
console.log(d1); // 👉️ 2022

// ------------------------------------------------------------------

// // EXAMPLE 2 - Capitalize the getFullYear() method correctly

// const d2 = new Date('Sept 24, 22 13:20:18').getFullYear();
// console.log(d2); // 👉️ 2022

// ------------------------------------------------------------------

// // EXAMPLE 3 - Only use one set of parentheses when calling getFullYear()

// const d3 = new Date('Sept 24, 22 13:20:18').getFullYear();
// console.log(d3); // 👉️ 2022

// ------------------------------------------------------------------

// // EXAMPLE 4 - Only call the method on valid Date objects

// const current = new Date().getFullYear();
// console.log(current); // 👉️ 2024
