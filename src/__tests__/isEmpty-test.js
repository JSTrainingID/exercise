// @flow
import isEmpty from '../isEmpty';

describe('isEmpty', () => {
  test('returns false for null', () => {
    const result = isEmpty(null);
    const expected = false;
    expect(result).toBe(expected);
  });

  test('returns false for undefined', () => {
    const result = isEmpty(undefined);
    const expected = false;
    expect(result).toBe(expected);
  });

  test('returns true for empty string', () => {
    const emptyString = isEmpty('');
    const emptyStringWithSpace = isEmpty(' ');
    expect(emptyString).toBe(true);
    expect(emptyStringWithSpace).toBe(false);
  });

  test('returns true for empty array', () => {
    const emptyArray = isEmpty([]);
    const emptyArrayWithArray = isEmpty([[]]);
    expect(emptyArray).toEqual(true);
    expect(emptyArrayWithArray).toEqual(false);
  });

  test('returns true for empty object', () => {
    const emptyObject = isEmpty({});
    const emptyObjectWithOneKey = isEmpty({ x: 0 });
    expect(emptyObject).toEqual(true);
    expect(emptyObjectWithOneKey).toEqual(false);
  });

  test('returns false for every other value', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(NaN)).toBe(false);
    expect(isEmpty([''])).toEqual(false);
  });
});
