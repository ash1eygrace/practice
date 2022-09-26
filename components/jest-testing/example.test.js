const remainder = require('./example.js');

test('Test 1: remainder of 3 / 2 equals 1', () => {
    expect(remainder(3, 2)).toBe(1);
});


test('Test 2: Remainder of 1000.5 / 500.5 to equal 1', () => {
    expect(remainder(1000.5, 500.5)).toBe(500);
});


test('remainder of 4 / 2 to equal 1 (this should fail since the reminder if 0 )', () => {
    expect(remainder(4, 2)).toBe(0);
});