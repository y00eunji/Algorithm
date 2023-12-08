function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.

  if (a.toString().length !== b.toString().length) return false;

  let temp = a.toString().split('');

  b.toString()
    .split('')
    .forEach((n) => {
      if (temp.includes(n)) {
        const index = temp.indexOf(n);
        temp.splice(index, 1);
      }
    });

  if (temp.length > 0) return false;
  else return true;
}

console.log(
  sameFrequency(182, 281),
  sameFrequency(34, 14),
  sameFrequency(3589578, 5879385),
  sameFrequency(22, 222)
);
