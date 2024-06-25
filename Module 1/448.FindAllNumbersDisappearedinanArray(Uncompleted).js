/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let newArr = [];
  for (i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};
