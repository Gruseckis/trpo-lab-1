const assert = require('chai').assert;
const converter = require('../converter');

describe('Converter', () => {
  it('Test scenario 1', () => {
    assert.deepEqual(converter([]), ['Empty array']);
  });
  it('Test scenario 2', () => {
    assert.deepEqual(converter(['string']), ['string']);
  });
  it('Test scenario 3', () => {
    assert.deepEqual(converter(['1']), [1]);
  });
  it('Test scenario 4', () => {
    assert.deepEqual(converter(['string', '1']), ['string', 1]);
  });
});
