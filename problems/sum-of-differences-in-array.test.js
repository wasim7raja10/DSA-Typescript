const sumOfDifferences = require('./sum-of-differences-in-array');

test('sum of differences test 0', () => {
  expect(sumOfDifferences([1, 2, 10])).toBe(9);
});

test('sum of differences test 1', () => {
  expect(sumOfDifferences([-3, -2, -1])).toBe(2);
});
