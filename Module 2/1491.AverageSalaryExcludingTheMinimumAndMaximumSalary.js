/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
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

  insertionSort(salary, salary.length);

  salary.splice(0, 1);
  salary.splice(salary.length - 1, 1);

  let sum = 0;
  salary.forEach((el) => {
    sum += el;
  });

  return sum / salary.length;
};
