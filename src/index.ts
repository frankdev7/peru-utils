import { departments, districts, provinces } from './data';
import { findByCode, findByFullUbigeoCode, findUbigeoCodeByDeparmentName, findUbigeoCodeByDistrictName, findUbigeoCodeByProvinceName } from './utils';

export const ubigeo = {
  getDepartments() {
    return [...departments.values()];
  },

  getProvince(code: string) {
    return findByCode(code, provinces);
  },

  getDistrict(code: string) {
    return findByCode(code, districts);
  },

  getUbigeoDetails(code: string) {
    return findByFullUbigeoCode(code);
  },

  getUbigeoCodeByDeparmentName(name: string) {
    return findUbigeoCodeByDeparmentName(name);
  },

  getUbigeoCodeByProvinceName(name: string) {
    return findUbigeoCodeByProvinceName(name);
  },

  getUbigeoCodeByDistrictName(name: string) {
    return findUbigeoCodeByDistrictName(name);
  },
};
