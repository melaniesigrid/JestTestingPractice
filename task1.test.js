const { expect } = require('@jest/globals');
const stringLength = require('./Task1.js');
test('string length is correct', () => {
  expect(stringLength('Melanie')).toStrictEqual(7);
});