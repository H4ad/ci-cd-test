const sum = require('../src/sum');

test('soma 1 + 2 e espera que seja 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('soma 5 + 5 e espera que seja 10', () => {
    expect(sum(5, 5)).toBe(10);
});