const divide = require('./divide');
test('dividetest', () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(10, 5)).toBe(2);
});