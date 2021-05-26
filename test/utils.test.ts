import { province } from '../src/data';
import { findByCode } from '../src/utils';

describe('test add function', () => {
  test("should return 7 for findByCode('01', province)?.length", () => {
    const expected = findByCode('01', province)?.length;
    const result = 7;
    expect(expected).toBe(result);
  });
});
