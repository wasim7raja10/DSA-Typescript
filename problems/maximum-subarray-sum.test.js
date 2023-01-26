const maxSequence = require('./maximum-subarray-sum');

test('max subarray sum test 0', () => {
  expect(maxSequence([])).toBe(0);
});

test('max subarray sum test 1', () => {
  expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
