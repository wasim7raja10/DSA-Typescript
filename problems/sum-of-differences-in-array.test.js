// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

var sumOfDifferences = function (arr) {
  // if arr.lenth > 1 lets go
  if (arr.length > 1) {

    // sorting arr in descending order
    arr = arr.sort((a, b) => b - a)

    // diffArr contains differences between consecutive pairs in arr
    // [10, 2, 1] ---> [8, 1]
    const diffArr = []
    for (let i = 0; i < arr.length - 1; i++) {
      diffArr.push(arr[i] - arr[i + 1])
    }

    // answer will be 0 if diffArr is empty
    let answer = 0

    // answer will be the only element remaining if diffArr.length is 1
    if (diffArr.length == 1) {
      return diffArr[0]
    }

    // if there are more than 1 element then answer will be the sum of all element
    else if (diffArr.length > 1) {
      answer = diffArr.reduce((a, b) => a + b)
    }
    return answer
  }

  // if arr is empty lets return 0
  return 0;
}

test('sum of differences test 0', () => {
  expect(sumOfDifferences([1, 2, 10])).toBe(9);
});

test('sum of differences test 1', () => {
  expect(sumOfDifferences([-3, -2, -1])).toBe(2);
});