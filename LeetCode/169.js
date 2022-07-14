/**
 * 169. Majority Element
 */
var majorityElement = function (nums) {
  let map = new Map();

  nums.forEach((element) => {
    let num = map.get(element) + 1 || 1;
    map.set(element, num);
  });
  console.log(map);
  for (const a of map.entries()) {
    console.log(a);
    if (a[1] > (nums.length - 1) / 2) {
      return a[0];
    }
  }
};
console.log(majorityElement((nums = [2, 2, 1, 1, 1, 2, 2])));
