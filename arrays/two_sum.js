/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i=0; i<nums.length; i++) {
        const currentVal = nums[i];
        const complement = target - currentVal;

        if(map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(currentVal , i)
    }

    return [];
};


// Two Pointer Approach
// Only works for sorted array

// var twoSumSorted = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         let sum = nums[left] + nums[right];

//         if (sum === target) {
//             return [left, right]; // Found the pair
//         } else if (sum < target) {
//             left++; // Need a larger value
//         } else {
//             right--; // Need a smaller value
//         }
//     }

//     return []; // No solution found
// };