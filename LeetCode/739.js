/*
739. Daily Temperatures
*/

var dailyTemperatures = function (temperatures) {
  let day = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    let count = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        count++;
        day[i] += count;
        break;
      }
      count++;
    }
  }
  return day;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
