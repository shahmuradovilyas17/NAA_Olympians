/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let first = arr[0];
  let tagged = arr[0];
  let index = 0;
  let last = arr[arr.length - 1];
  let obj = {};
  if (arr.length < 3) {
    return false;
  } else {
    for (i = 0; i < arr.length; i++) {
      if (first > arr[i]) {
        return false;
      } else if (last > arr[arr.length - 2]) {
        return false;
      } else {
        if (!(tagged === arr[i])) {
          tagged = arr[i];
          index = i;
        } else if (tagged === arr[i]) {
          if (index === i - 1) {
            return false;
          }
        }
      }
    }
    return true;
  }
};
