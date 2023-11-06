import { describe, expect, test } from 'vitest';

import { ubigeo, ubigeoINEI } from '../dist';

describe('test functions for ubigeo', () => {
  test('should return inei ubigeo by id using ubigeo.findByIdUbigeo()', () => {
    const expected = ubigeo.findByIdUbigeo('1');
    const result = {
      id: '1',
      inei: '010101',
      reniec: '010101',
    };
    expect(expected).toEqual(result);
  });
});

describe('test functions for ubigeoINEI', () => {
  test('should return 25 for ubigeo.getDepartments().length', () => {
    const expected = ubigeoINEI.getDepartments().length;
    const result = 25;
    expect(expected).toBe(result);
  });

  test("should return 13 for ubigeo.getProvince('08')?.length", () => {
    const expected = ubigeoINEI.getProvince('08')?.length;
    const result = 13;
    expect(expected).toBe(result);
  });

  test("should return 21 for ubigeo.getProvince('01')?.length", () => {
    const expected = ubigeoINEI.getDistrict('0101')?.length;
    const result = 21;
    expect(expected).toBe(result);
  });

  test("should return { department: 'Amazonas', province: 'Chachapoyas', district: 'Chachapoyas' } for ubigeo.getUbigeoDetails('010101')", () => {
    const expected = ubigeoINEI.getUbigeoDetails('010101');
    const result = {
      code: '010101',
      department: 'Amazonas',
      province: 'Chachapoyas',
      district: 'Chachapoyas'
    }
    expect(expected).toEqual(result);
  });

  test("should return undefined for ubigeo.getUbigeoDetails('999999')", () => {
    const expected = ubigeoINEI.getUbigeoDetails('999999');
    expect(expected).toEqual(undefined);
  });

  test("should return the ubigeo code '08' for ubigeo.getUbigeoCodeByDeparmentName('CUSCO')", () => {
    const expected = ubigeoINEI.getUbigeoCodeByDeparmentName('CUSCO');
    const result = {
      code: '08',
      name: 'Cusco'
    }
    expect(expected).toEqual(result);
  });

  test("should return the ubigeo code '0808' for ubigeo.getUbigeoCodeByProvinceName('ESPINAR')", () => {
    const expected = ubigeoINEI.getUbigeoCodeByProvinceName('CUSCO', 'ESPINAR');
    const result = {
      code: '0808',
      name: 'Espinar'
    }
    expect(expected).toEqual(result);
  });

  test("should return the ubigeo code '080801' for ubigeo.getUbigeoCodeByDistrictName('ICA', 'PISCO', 'INDEPENDENCIA')", () => {
    const expected = ubigeoINEI.getUbigeoCodeByDistrictName('ICA', 'PISCO', 'INDEPENDENCIA');
    const result = {
      code: '110504',
      name: 'Independencia'
    }
    expect(expected).toEqual(result);
  });

  test("should return the ubigeo details for ubigeo.getUbigeoCodeByDistrictName('ICA', 'PISCO', 'INDEPENDENCIA')", () => {
    const expected = ubigeoINEI.getUbigeoFullDetailsByDistrictName('ICA', 'PISCO', 'INDEPENDENCIA');
    const result = {
      code: '110504',
      department: 'Ica',
      province: 'Pisco',
      district: 'Independencia',
      surfaceArea: '272.34',
      latitude: '-13.6939',
      longitude: '-76.0256'
    }
    expect(expected).toEqual(result);
  });

  test("should return undefined for ubigeo.getUbigeoCodeByDistrictName('MORDOR')", () => {
    const expected = ubigeoINEI.getUbigeoCodeByDistrictName('MORDOR', 'MORDOR', 'MORDOR');
    expect(expected).toEqual(undefined);
  });
});
