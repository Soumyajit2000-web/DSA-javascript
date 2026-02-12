/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while(current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
};

// Recursive solution

var reverseListRecursive = function(head) {
    // 1. Base Case: If the list is empty or we've reached the last node
    if (head === null || head.next === null) {
        return head;
    }

    // 2. Recursive Step: Go all the way to the end of the list
    // This will return the very last node, which becomes our new head
    let newHead = reverseListRecursive(head.next);
    // 3. The "Flip":
    // head.next is the node currently "after" us. 
    // We tell that node's 'next' pointer to point back to us (the current head).
    head.next.next = head;
    // 4. Break the old forward link to prevent a circular reference
    head.next = null;
    // 5. Return the new head (the original tail) back up the call stack
    return newHead;
}