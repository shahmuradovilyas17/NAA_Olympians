/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let obj = {};
  let boolean = false;
  for (i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      boolean = true;
    }
  }
  return boolean;
};
