const sum = require('../src/sum');

test('soma 1 + 2 e espera que seja 3', () => {
    expect(sum(1, 2)).toBe(3);
});