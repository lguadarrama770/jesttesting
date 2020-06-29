const subtract = require('./subtract');
test('subtracttest', () =>{
    expect(subtract(5, 4)).toBe(1);
    expect(subtract(8, 4)).toBe(4);
});