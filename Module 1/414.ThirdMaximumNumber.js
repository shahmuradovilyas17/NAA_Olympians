/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let maxNumber = nums[0];
  let secondArr = [];
  let thirdArr = [];
  for (i = 0; i < nums.length; i++) {
    if (maxNumber < nums[i]) {
      maxNumber = nums[i];
    }
  }
  secondArr = nums.filter((num) => {
    if (!(num === maxNumber)) {
      return true;
    }
  });
  let secondMax = secondArr[0];
  for (i = 0; i < secondArr.length; i++) {
    if (secondMax < secondArr[i]) {
      secondMax = secondArr[i];
    }
  }
  thirdArr = secondArr.filter((num) => {
    if (!(num === secondMax)) {
      return true;
    }
  });
  let thirdMax = thirdArr[0];
  for (i = 0; i < thirdArr.length; i++) {
    if (thirdMax < thirdArr[i]) {
      thirdMax = thirdArr[i];
    }
  }
  if (nums.length < 3) {
    return maxNumber;
  } else {
    if (thirdMax || thirdMax === 0) {
      return thirdMax;
    } else if (secondMax || secondMax === 0) {
      return maxNumber;
    } else {
      return maxNumber;
    }
  }
};
