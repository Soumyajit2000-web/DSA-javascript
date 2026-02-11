/* 

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/

// Optimal solution

// XOR of two same numbers is 0: a ^ a = 0

// XOR of a number with 0 is the number itself: a ^ 0 = a

// So, if all elements occur twice except one, XOR-ing all gives that unique number.

// DRY RUN

/* 

Input: [2, 3, 5, 2, 3]

Start xor = 0

xor = 0 ^ 2 = 2
xor = 2 ^ 3 = 1
xor = 1 ^ 5 = 4
xor = 4 ^ 2 = 6
xor = 6 ^ 3 = 5
Final answer: 5

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }

    return xor;
};