// Primitive Types

let num = 42; // number
let str = "Hello"; // string
let bool = true; // boolean
let undef; // undefined
let nul = null; // object (js quirk -> bug)
let sym = Symbol("id"); // symbol
let big = 123456789012345678901234567890n; // bigint

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nul);
console.log(typeof sym);
console.log(typeof big);

// Reference Types

let obj = { name: "JS" };
let arr = [1, 2, 3];
function func() {
  return "Hello";
}
let date = new Date();
let reg = /abc/;
let map = new Map();
let set = new Set();

console.log(typeof obj);
console.log(obj instanceof Object); // object instanceof constructor and instanceof doesn't work for primitive types
console.log(typeof arr);
console.log(arr instanceof Array);
console.log(typeof func);
console.log(func instanceof Function);
console.log(typeof reg);
console.log(reg instanceof RegExp);
console.log(typeof map);
console.log(map instanceof Object);
console.log(typeof set);
console.log(set instanceof Object);


let a = String(13);
console.log(typeof a);
console.log(a instanceof String);

let b = new String(4);
console.log(typeof b);
console.log(b instanceof String);

// Type Conversion

// Implicit

console.log("5" - 2); // 3
console.log("5" + 2); // "52"

// Explicit

console.log(Number("42")); // 42
console.log(String(44)); // "44"
console.log(Number("42abc")); //  NaN
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Number("5") + 2); // 7
console.log(String(5) + 2); // "52"



// Mutable vs Immutable

let str1 = "Hello";
str1[0] = "h";
console.log("str1: ", str1); // "Hello" (immutable)

let arr1 = [1, 2, 3];
arr1[0] = 100;
console.log(arr1); // [100,2,3] (mutable)

let obj1 = { name: "JS" };
obj1.name = "React";
console.log("obj1 :", obj1); // { name: "React"} (mutable)


// Tagged Template


function highlight(string, value, value1){
    console.log("string :", string);
    console.log("value :", value);
    console.log("value :", value1);
    
}

let name = "JS"
let lang = "ES6"

highlight`I love ${name} in ${lang}.`

