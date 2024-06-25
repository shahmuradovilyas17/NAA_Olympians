/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let digitString = "";
  let splittedString = [];
  digits.forEach((digit) => {
    digitString += digit;
  });
  digitString = String(BigInt(digitString) + BigInt(1));
  splittedString = digitString.split("").map(Number);
  return splittedString;
};
