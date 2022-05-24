/**
 * 191. Number of 1 Bits
 */

// var hammingWeight = function (n) {
//   let bin = n.toString(2);
//   let regex = /1/g;
//   let count = bin.match(regex).length;

//   return count;
// };
// // var hammingWeight = function (n) {
//   let bin = n.toString(2);
//   let result = 0;
//   for (let i = 0; i < bin.length; i++) {
//     if (bin[i] == 1) result++;
//   }

//   return result;

// };

var hammingWeight = function (n) {
  let b = "";
  for (let i = 0; i < n.length; i++) {
    b += "0";
  }
  let result = parseInt(n) ^ parseInt(b);
  return result;
};
console.log(hammingWeight(00000000000000000000000000001011));
