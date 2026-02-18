/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]

Example 4:

Input: head = [1,2,3]
Output: [2,1,3]

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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
var swapPairs = function (head) {

  if (!head || !head.next) return head;
  let dummy = new ListNode(0, head);
  let prev = dummy;

  while(prev.next && prev.next.next) {
    let first = prev.next;
    let second = first.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;

  }

  return dummy.next;
};

const list = [1, 2, 3, 4];
const head = new ListNode(list[0], null);
let curr = head;
for (let i = 1; i < list.length; i++) {
  const node = new ListNode(list[i], null);
  curr.next = node;
  curr = node;
}

console.log(swapPairs(head));

// Recursive solution
var swapPairsRecursive = function(head) {
    // 1. Base Case: If the list is empty or has only one node left, 
    // we cannot swap. Just return the node as is.
    if (!head || !head.next) {
        return head;
    }

    // 2. Identify the nodes to swap
    let firstNode = head;
    let secondNode = head.next;

    // 3. The Recursive Step:
    // Before we connect 'secondNode' back to 'firstNode', we must 
    // calculate what 'firstNode' will point to next. 
    // It should point to the result of swapping the rest of the list.
    firstNode.next = swapPairs(secondNode.next);

    // 4. Perform the local swap
    secondNode.next = firstNode;

    // 5. Return the new head of this pair (which is the second node)
    return secondNode;
};
