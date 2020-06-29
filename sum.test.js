const sum = require('./sum');//(1)
test('sumtest', () => { //(2)
    expect(sum(1, 2)).toBe(3); //(3)
    expect(sum(4, 3)).toBe(7);
});