const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const vowel = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < INPUT.length - 1; i++) {
  let state = true;
  // 1. 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
  let filterVowel = INPUT[i].split('').filter((v) => vowel.includes(v)).length;
  if (filterVowel <= 0) {
    console.log(`<${INPUT[i]}> is not acceptable.`);
    state = false;
    continue;
  }

  const input = INPUT[i].split('');

  let a = 0;
  let b = 0;

  // 3. 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
  for (let j = 0; j < input.length - 1; j++) {
    if (input[j] === input[j + 1]) {
      if (input[j] !== 'e' && input[j] !== 'o') {
        console.log(`<${INPUT[i]}> is not acceptable.`);
        state = false;
        break;
      }
    }
  }

  // 2. 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
  for (let z = 0; z < input.length; z++) {
    if (vowel.includes(input[z])) {
      a++;
      b = 0;
    } else {
      b++;
      a = 0;
    }

    if (a >= 3 || b >= 3) {
      console.log(`<${INPUT[i]}> is not acceptable.`);
      state = false;
      break;
    }
  }

  if (state) console.log(`<${INPUT[i]}> is acceptable.`);
}
