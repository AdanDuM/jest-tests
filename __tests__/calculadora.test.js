const calculadora = require('../src/calculadora');

test('soma 1 + 2 igual a 3', () => {
	expect(calculadora.soma(1, 2)).toBe(3);
});
