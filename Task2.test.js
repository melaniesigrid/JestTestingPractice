const { expect } = require('@jest/globals');
const reverseString = require('./Task2.js');

test('string is correctly reversed', () => {
  expect(reverseString('Melanie is a dev.')).toEqual('.ved a si einaleM');
});