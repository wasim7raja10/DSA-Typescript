// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function (arr) {
  // answer can be 0 or > 0 
  // as [] is the fallback subarray if all the elements are -ve
  let ans = 0, sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]

    // reset sum to 0 if sum < 0
    if (sum < 0) sum = 0

    // keep track of largest value of sum
    if (sum > ans) ans = sum
  }

  return ans
}

module.exports = maxSequence;