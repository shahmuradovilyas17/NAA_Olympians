/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {};
  const countArr = [];
  let maxNumber = 0;
  for (i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let key in obj) {
    countArr.push(obj[key]);
  }
  maxNumber = countArr[0];

  for (i = 0; i < countArr.length; i++) {
    if (countArr[i] > maxNumber) {
      maxNumber = countArr[i];
    }
  }
  for (let key in obj) {
    if (obj[key] == maxNumber) {
      return key;
    }
  }
};
