/*
 1491. Average Salary Excluding the Minimum and Maximum Salary
 */
var average = function (salary) {
  let salaryArr = salary.sort((a, b) => a - b);
  console.log(salaryArr);
  salaryArr.pop();
  salaryArr.shift();
  return salaryArr.reduce((p, c) => p + c, 0) / salaryArr.length;
};

console.log(
  average([
    25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000,
    40000,
  ])
);
