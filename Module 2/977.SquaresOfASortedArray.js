var sortedSquares = function (nums) {
  const squareNums = nums.map((num) => {
    return num * num;
  });
  const bubbleSort = (arr, n) => {
    let i = 0,
      j = 0,
      temp = 0;
    let swapped = false;

    for (i = 0; i < n; i++) {
      for (j = 0; j < n - i; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (swapped == false) break;
    }

    return arr;
  };

  return bubbleSort(squareNums, squareNums.length);
};
