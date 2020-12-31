var firstName = "John";
// console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
// console.log(fullAge);

var job;
// console.log(job);

job = "Teacher";
// console.log(job);

/********************************************
 *  Variable Mutation and type Coercion
 */

var firstName = "John";
var age = 28;
isMarried = false;
// console.log(
//   firstName +
//     " is a " +
//     age +
//     " years old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// Variable Mutation
age = "twenty eight";
job = "driver";
// alert(
//   firstName +
//     " is a " +
//     age +
//     " years old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

//var lastName = prompt("What is his last Name?");
//console.log(firstName + " " + lastName);
// console.log(firstName + " " + lastName);

/*****************************************
 *   Basic Operators
 */

var currentYear, yearJohn, yearMark;
currentYear = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;

// console.log(yearJohn);
// console.log(currentYear + 2);
// console.log(currentYear * 2);
// console.log(currentYear / 10);

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older than John");
// var x;
// console.log(typeof x);

// /*****************************************
//  *   Operator Precedence
//  */
// var now = 2019;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

/*****************************************
//  *   CODING Challenge 1
//  */
// BMI = mass / height ^2 = mass / (height * height)

// var markMass, johnMass, mass, markHeight, johnHeight;

// markHeight = 1.828;
// markMass = 92.986;
// johnHeight = 1.676;
// johnMass = 83.914;

// markBMI = markMass / (markHeight * markHeight);
// johnBMI = johnMass / (johnMass * johnMass);
// console.log(markBMI, johnBMI);

// var markHeigherBMI = markBMI > johnBMI;
// console.log("Is Mark's BMI hiher than Joh's? " + markHeigherBMI);

/*****************************************
 *   If / else statement
 */
// var firstName = "John";
// var civilStatus = "single";

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon :) ");
// }

/*****************************************
 *  Boolean Logic
 */

// var firstName = "John";
// var age = 16;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager.");
// } else {
//   console.log(firstName + " is a man.");
// }

/*****************************************
 *  The Ternary Operator and Switch Statements
 */
// var firstName = "John";
// // var age = 22;

// // Ternary Operator
// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// // Switch Statement
// var job = "fighter";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " teaches kids how to code");
//     break;
//   case "driver":
//     console.log(firstName + " drives an uber in Lisbon.");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites");
//     break;
//   default:
//     console.log(firstName + " does something else");
//     break;
// }

// var age = 40;
// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age > 20 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
//   default:
//     console.log(firstName + " is a man.");
//     break;
// }

/*****************************************
 *  Coding Challenge 2
 */

var johnTeam = [105, 120, 102];
var mikeTeam = [184, 120, 104];
var maryTeam = [97, 134, 105];
var startingScore = 0;

for (var i = 0; i < johnTeam.length; i++) {
  johnAvgScore = startingScore += johnTeam[i] / 3;
}

startingScore = 0;
for (var i = 0; i < mikeTeam.length; i++) {
  mikeAvgScore = startingScore += mikeTeam[i] / 3;
}

startingScore = 0;
for (var i = 0; i < maryTeam.length; i++) {
  maryAvgScore = startingScore += maryTeam[i] / 3;
}

if (johnAvgScore > mikeAvgScore) {
  console.log("John's team won!  " + johnAvgScore + " to " + mikeAvgScore);
} else if (johnAvgScore < mikeAvgScore) {
  console.log("Mike's team won!  " + mikeAvgScore + " to " + johnAvgScore);
} else {
  console.log("Tied game! " + johnAvgScore + " to " + mikeAvgScore);
}

console.log("John's team score: " + johnAvgScore);
console.log("Mike's team score: " + mikeAvgScore);
console.log("Mary's team score: " + maryAvgScore);
