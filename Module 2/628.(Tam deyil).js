/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  function insertionSort(arr, n) {
    let key;
    for (let i = 1; i < n; i++) {
      key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }

  insertionSort(nums, nums.length);

  let product =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  return product;
};
