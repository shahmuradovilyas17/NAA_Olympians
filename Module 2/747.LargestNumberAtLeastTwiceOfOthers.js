/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxNum = nums[0];
  let index = 0;
  for (i = 1; i < nums.length; i++) {
    if (maxNum < nums[i]) {
      maxNum = nums[i];
      index = i;
    }
  }

  for (j = 0; j < nums.length; j++) {
    if (maxNum / nums[j] < 2 && maxNum / nums[j] != 1) {
      return -1;
    }
  }
  return index;
};
