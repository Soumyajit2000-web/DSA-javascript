/* 
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself. 


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
 const dummy = new ListNode(0);
 let result_tail = dummy;

 let l1_tail = l1;
 let l2_tail = l2;
 let carry = 0;

 while (l1_tail !== null || l2_tail!==null || carry !==0) {
    let sum = carry;
    if (l1_tail !== null) {
        sum += l1_tail.val;
        l1_tail = l1_tail.next
    }

    if (l2_tail !== null) {
        sum += l2_tail.val;
        l2_tail = l2_tail.next;
    }

    // calculate carry
    carry = Math.floor(sum/10);

    // create a new node and add the value there
    result_tail.next = new ListNode(sum%10);
    result_tail = result_tail.next;
 }

 return dummy.next;
};

let l1 = new ListNode(5, null);
let l2 = new ListNode(5, null);

console.log(addTwoNumbers(l1, l2));
