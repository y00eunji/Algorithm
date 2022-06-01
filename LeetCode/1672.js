/**
 * 1672. Richest Customer Wealth
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const reducer = (accumulator, curr) => accumulator + curr;
    max = Math.max(max, accounts[i].reduce(reducer));
  }
  return max;
};
