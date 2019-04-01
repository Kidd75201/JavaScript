// // var, let, const

// const name = "John";
// const age = 30;
// const s = "Hello World";
// const z = "Technology, Computer, IT, Code";

// // Concatenation
// console.log("My name is " + name + " and I am " + age);
// // Template String (ES6)
// console.log(`My name is ${name} and I am ${age}`);
// // substring
// console.log(s.substring(0, 7).toUpperCase());
// // split
// console.log(z.split(", "));

// //------------------ Scope and Scope Chain

// let num1 = 5;

// function a() {
//   let num2 = 10;

//   function b() {
//     let num3 = 15;
//     console.log(num3 + num2 + num1);
//   }
//   b();
// }

// a();
//------------------Hoisting---------------------------------
// Must declare all variable at the beginning of scope
/* var a = 10;

function b() {
  return 20;
}
console.log(a);
console.log(b()); */

//------------------Objects vs Primitives-----------------------
/* let a = 10;
let b = a;
a = 20;
console.log(a);
console.log(b);

let c = {
  name: "John"
};
let d = c;
 */

//------------------THIS-----------------------
function a() {
  console.log(this);
  console.log(this === window);

  function b() {
    console.log(this);
    console.log(this === window);
  }
  b();
}
a();
