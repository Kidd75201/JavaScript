// var age = prompt("What is your age?");
// var days = age * 365.25;
// alert(age + " years is roughly " + days + " days");
// var lifeSpan = 28000;
// var daysRemaining = lifeSpan - days;

// alert(
//   "The average life span is " +
//     lifeSpan +
//     " days. You have " +
//     daysRemaining +
//     " days left to live your life!! Get Started!! "
// );

// var x = 10;
// var y =9;
// el = !(x === y);
// console.log(el);

// string we're looping over
// var str = "hello";
// // first character is at index 0
// var count = 0;

// while (count < str.length) {
//   console.log(str[count]);
//   count++;
// }

// var num = 1;

// while (num <= 20) {
//   if (num % 4 === 0) {
//     console.log(num);
//   }
//   num++;
// }

//  While loop Problem Set ---------------
// 1.
var num1 = -10;
console.log("Print all numbers between -10 and 19");
while (num1 < 20) {
  console.log(num1);
  num1++;
}

// 2.
var num2 = 10;
console.log("Print all even numbers between 10 and 40");
while (num2 <= 40) {
  console.log(num2);
  num2 += 2;
}

// checks all number to determine if they are even
// while(num2 <= 40) {
//     if(num2 % 2 === 0) {
//         console.log(num2);
//     }
//     num2 += 1;
// }

// 3.
var num3 = 300;
console.log("Print all odd numbers between 300 and 333");
// while (num3 < 333) {
//   console.log(num3);
//   num3 += 2;
// }

while (num3 <= 333) {
  if (num3 % 2 !== 0) {
    console.log(num3);
  }
  num3 += 1;
}

// 4.
var num4 = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while (num4 <= 50) {
  if (num4 % 5 === 0 && num4 % 3 === 0) {
    console.log(num4);
  }
  num4++;
}
