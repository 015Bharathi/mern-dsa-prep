// var, let, const different

var a = 1;
var a = 2;
console.log("a :", a);

let b = 1;
// let b = 1  Cannot redeclare block-scoped variable 'b'.
b = 2;

console.log("b :", b);

const c = 1;
// const c = 2 Cannot redeclare block-scoped variable 'b'.
// c = 2 TypeError: Assignment to constant variable.

console.log("c :", c);

// Hoisting

console.log("x :", x); // undefined
var x = 10;

// console.log(y)   Cannot access 'y' before initialization
let y = 10;

fn();
function fn() {
  console.log("fn :", 10);
}

// fnc() TypeError: fnc is not a function
var fnc = function fnc() {
  console.log("fnc :", 30);
};

fnc();

// func() ReferenceError: Cannot access 'func' before initialization
let func = function func() {
  console.log("func :", 40);
}
// Scope

function funct() {
  var f = 10;
}

// console.log("f :", f); ReferenceError: f is not defined

{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log("a :", a);
// console.log(b);  Cannot access 'b' before initialization
// console.log(c); Cannot access 'c' before initialization

// Shadowing & illegal shadowing

let s = 10;

{
  let s = 20;
  console.log("s :", s);
}

let i = 10;

{
  // var i = 20 Cannot redeclare block-scoped variable 'i'
  console.log("i :", i);
}