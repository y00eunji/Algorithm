/*
1290. Convert Binary Number in a Linked List to Integer
연결리스트, 수학
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let num = 0;

  while (head) {
    num += String(head.val);
    head = head.next;
  }

  return parseInt(num, 2);
};
