/* 

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:

Input: head = [1,2,2,1]
Output: true

Example 2: 

Input: head = [1,2]
Output: false

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
*/

// Array approach

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var isPalindrome = function (head) {
//   const arr = [];
//   let curr = head;
//   while (curr) {
//     arr.push(curr.val);    
//     curr = curr.next;

//   }

//   if (arr.length) {
//     for (let i = 0; i < arr.length / 2; i++) {
//       if (arr[i] !== arr[arr.length - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   return false;
// };

// Using Two Pointer Approach - Time Complexity O(n) and space O(1).

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half of the linked list
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    
    // compare the first half of the linked list with the reversed second half of the linked list
    let first = head;
    let second = prev
    while (second) {
        if (first && first.val !==second.val) {
            return false
        }

        first = first.next;
        second = second.next;
    }

    return true;
};
