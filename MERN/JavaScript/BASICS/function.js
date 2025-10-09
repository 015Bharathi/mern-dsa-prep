// Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Function Expression
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // 6

// Arrow Function
const square = (x) => x * x;
console.log(square(4)); // 16

// Default & Rest Parameters

function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log(greet()); // "Hello Guest"

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6

// Closures

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

// Hoisting

console.log(foo()); // "Hello"

function foo() {
  return "Hello";
}

// console.log(bar()); // TypeError: bar is not a function

var bar = function () {
  return "Hi";
};

// This behavior

const obj = {
  val: 42,
  regular: function () {
    console.log(this.val);
  },
  arrow: () => console.log(this.val),
};

obj.regular(); // 42
obj.arrow(); // undefined

// IIFE

// (() => {
//   console.log("Runs immediately");
// })();
