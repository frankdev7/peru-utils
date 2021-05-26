import { ubigeo } from '../src';

describe('test add function', () => {
  test('should return 25 for ubigeo.getDepartments().length', () => {
    const expected = ubigeo.getDepartments().length;
    const result = 25;
    expect(expected).toBe(result);
  });

  test("should return 13 for ubigeo.getProvince('08')?.length", () => {
    const expected = ubigeo.getProvince('08')?.length;
    const result = 13;
    expect(expected).toBe(result);
  });

  test("should return 21 for ubigeo.getProvince('01')?.length", () => {
    const expected = ubigeo.getDistrict('0101')?.length;
    const result = 21;
    expect(expected).toBe(result);
  });

  test("should include [{ code: '010101', name: 'Chachapoyas' }] for ubigeo.getProvince('0101')", () => {
    const expected = ubigeo.getDistrict('0101');
    const result = [{ code: '010101', name: 'Chachapoyas' }];
    expect(expected).toEqual(expect.arrayContaining(result));
  });
});
