/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return (index = i);
    } else if (target < nums[i]) {
      return (index = i);
    } else if (target > nums[i]) {
      index = nums.length;
    }
  }
  return index;
};
