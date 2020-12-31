// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) {
//   console.log(income);
//   total += income;
// }

// console.log(total);

// ********** Iterate through individual characters ***********

// let fullName = "Jose Coding God Beza";

// for (const char of fullName) {
//   console.log(char);
// }

// ********** Iterate Challenge ***********

// let incomes = [62000, 67000, 75000];
// let total = 0;
// for (let income of incomes) {
//   console.log(income);
//   income += 5000;
//   return income;
// }

// console.log(income);

// ********** Rest Operator ***********

// function add(...nums) {
//   console.log(nums);
// }

// add(4, 5, 7, 8, 12);

// ********** Arrow Functions ***********

function add(...nums) {
  let total = nums.reduce((x, y) => x + y);
  console.log(total);
}

add(4, 5, 7, 8, 12);
