/*
43. Multiply Strings
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  answer = [];

  for (let i = 0; i < num2.length; i++) {
    for (let j = 0; j < num1.length; j++) {
      let result = num2[i] * num1[j];
      const carry = Math.floor(result / 10);
      const remain = result % 10;

      if (answer[i + j]) {
        answer[i + j] += remain;
        if (answer[i + j] > 9) {
          // 더하기 중 자리올림 발생
          let k = 0;
          while (answer[i + j + k] > 9) {
            answer[i + j + k] -= 10;
            if (answer[i + j + k + 1]) {
              answer[i + j + k + 1] += 1;
            } else {
              answer[i + j + k + 1] = 1;
            }
            k++;
          }
        }
      } else {
        answer[i + j] = remain;
      }

      if (carry > 0) {
        if (answer[i + j + 1]) {
          answer[i + j + 1] += carry;
          if (answer[i + j + 1] > 9) {
            let k = 1;
            while (answer[i + j + k] > 9) {
              answer[i + j + k] -= 10;
              if (answer[i + j + k + 1]) {
                answer[i + j + k + 1] += 1;
              } else {
                answer[i + j + k + 1] = 1;
              }
              k++;
            }
          }
        } else {
          answer[i + j + 1] = carry;
        }
      }
    }
  }

  return answer.reverse().join("");
};

console.log(multiply((num1 = "123"), (num2 = "456")));
