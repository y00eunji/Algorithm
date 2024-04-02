/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let arr1 = new Array(128).fill(0);
  let arr2 = new Array(128).fill(0);

  for (let i = 0; i < s.length; i++) {
    let temp1 = s.charCodeAt(i);
    let temp2 = t.charCodeAt(i);

    if (arr1[temp1] === 0 && arr2[temp2] === 0) {
      arr1[temp1] = temp2;
      arr2[temp2] = temp1;
    } else if (arr1[temp1] !== temp2 || arr2[temp2] !== temp1) {
      return false;
    }
  }
  return true;
};
