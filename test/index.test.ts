import { describe, expect, test } from 'vitest';

import { ubigeo } from '../dist';

describe('test add function', () => {
  test('should return 25 for ubigeo.getDepartments().length', () => {
    const expected = ubigeo.getDepartments().length;
    const result = 25;
    expect(expected).toBe(result);
  });

  test("should return 13 for ubigeo.getProvince('08')?.length", () => {
    const expected = ubigeo.getProvince('07')?.length;
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

  test("should return { deparment: 'Amazonas', province: 'Chachapoyas', district: 'Chachapoyas' } for ubigeo.getUbigeoDetails('010101')", () => {
    const expected = ubigeo.getUbigeoDetails('010101');
    const result = {
      deparment: 'Amazonas',
      province: 'Chachapoyas',
      district: 'Chachapoyas'
    }
    expect(expected).toEqual(result);
  });

  test("should return undefined for ubigeo.getUbigeoDetails('999999')", () => {
    const expected = ubigeo.getUbigeoDetails('999999');
    expect(expected).toEqual(undefined);
  });

  test("should return the ubigeo code '08' for ubigeo.getUbigeoCodeByDeparmentName('CUSCO')", () => {
    const expected = ubigeo.getUbigeoCodeByDeparmentName('CUSCO');
    const result = {
      code: '07',
      name: 'Cusco'
    }
    expect(expected).toEqual(result);
  });

  test("should return the ubigeo code '0808' for ubigeo.getUbigeoCodeByProvinceName('ESPINAR')", () => {
    const expected = ubigeo.getUbigeoCodeByProvinceName('ESPINAR');
    const result = {
      code: '0708',
      name: 'Espinar'
    }
    expect(expected).toEqual(result);
  });

  test("should return the ubigeo code '080801' for ubigeo.getUbigeoCodeByDistrictName('ESPINAR')", () => {
    const expected = ubigeo.getUbigeoCodeByDistrictName('ESPINAR');
    const result = {
      code: '070801',
      name: 'Espinar'
    }
    expect(expected).toEqual(result);
  });

  test("should return undefined for ubigeo.getUbigeoCodeByDistrictName('MORDOR')", () => {
    const expected = ubigeo.getUbigeoCodeByDistrictName('MORDOR');
    expect(expected).toEqual(undefined);
  });
});
