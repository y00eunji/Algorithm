//1281. Subtract the Product and Sum of Digits of an Integer
var subtractProductAndSum = function (n) {
  let num = n
    .toString()
    .split("")
    .map((x) => +x);
  const sum = num.reduce((a, b) => a + b);
  const product = num.reduce((a, b) => a * b);

  console.log(num);
  return product - sum;
};
console.log(subtractProductAndSum(4421));
