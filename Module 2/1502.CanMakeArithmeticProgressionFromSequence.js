/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
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

  insertionSort(arr, arr.length);
  let diff = arr[1] - arr[0];

  const arithmeticProgression = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let j = i + 1;
      if (j < arr.length) {
        if (arr[j] - arr[i] != diff) {
          return false;
        } else if (arr.length === 2) {
          return true;
        }
      }
    }
    return true;
  };
  return arithmeticProgression(arr);
};
