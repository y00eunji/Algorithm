/**
 * 82. Remove Duplicates from Sorted List II
 * 연결리스트, 투포인터
 */

var deleteDuplicates = function (head) {
  let curr = head,
    prev = null;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      while (curr && curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }
      curr = curr.next;
      if (!prev) {
        head = curr;
      } else {
        prev.next = curr;
      }
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};
