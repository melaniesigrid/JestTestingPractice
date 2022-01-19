const { capitalize } = require('./Task4.js');

const regEx = /^[A - Z].*/;

describe('capitalizes start', () => {
  test('takes string only', () => {
    expect(() => capitalize(5).toThrow(Error));
  });
  test('capitalizes', () => {
    expect(() => capitalize(melanie).test(regEx).toBeTruthy());
  });
});