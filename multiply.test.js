const multiply = require('./multiply');
test('multiplytest', () =>{
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(3, 3)).toBe(9);
});