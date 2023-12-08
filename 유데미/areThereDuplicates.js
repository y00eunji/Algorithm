function areThereDuplicates(...arg) {
  // good luck. (supply any arguments you deem necessary.)
  const set = new Set([...arg]);

  return set.size === [...arg].length ? false : true;
}

console.log(
  areThereDuplicates(1, 2, 3),
  areThereDuplicates(1, 2, 2),
  areThereDuplicates('a', 'b', 'c', 'a')
);
