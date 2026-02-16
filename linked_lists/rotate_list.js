/* 
Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:

Input: head = [0,1,2], k = 4
Output: [2,0,1]

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    if (!k) return head;
    let curr = head;
    let last = null;
    let length = 0;

    while (curr) {
        if (curr.next === null) {
            last = curr;
        } 
        curr = curr.next;
        length++;
    }

    if (length <= 1) return head;
    const kMod = k % length;
    if (kMod === 0) return head;
    
    last.next = head;
    curr = head;
    for(let i = 1; i < length - kMod; i++) {
        curr=curr.next;
    }

    let newHead = curr.next;
    curr.next = null;

    return newHead;
};

const node1 = new ListNode(1, null);
const node2 = new ListNode(2, null);
node1.next = node2

console.log(rotateRight(node1, 2));