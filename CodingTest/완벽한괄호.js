function solution(s) {
  // 괄호 문자열을 검사하여 균형이 맞는지 확인하는 함수
  function isBalanced(str) {
    const stack = [];
    for (let char of str) {
      if ('([{'.includes(char)) {
        stack.push(char);
      } else {
        if (!stack.length) return false;
        let last = stack.pop();
        if (
          (char === ')' && last !== '(') ||
          (char === ']' && last !== '[') ||
          (char === '}' && last !== '{')
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  // 주어진 문자열에 괄호를 하나 삽입하여 올바른 괄호 문자열을 만들 수 있는 위치의 개수를 찾는 함수
  function countInsertions(str) {
    let count = 0;
    // 괄호 삽입 시도
    const brackets = ['(', ')', '{', '}', '[', ']'];
    for (let i = 0; i <= str.length; i++) {
      for (let bracket of brackets) {
        let testStr = str.slice(0, i) + bracket + str.slice(i);
        if (isBalanced(testStr)) {
          count++;
          break; // 한 위치에 대해 올바른 괄호를 찾으면 더 이상 다른 괄호를 시도할 필요가 없습니다.
        }
      }
    }
    return count;
  }

  return countInsertions(s);
}

// console.log(solution('{([()]))}'));
// console.log(solution('[]([[]){}'));
// console.log(solution('(()()()'));
