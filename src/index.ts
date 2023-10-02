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

  getUbigeoCodeByDeparmentName(departmentName: string) {
    return findUbigeoCodeByDeparmentName(departmentName);
  },

  getUbigeoCodeByProvinceName(departmentName: string, provinceName: string) {
    return findUbigeoCodeByProvinceName(departmentName, provinceName);
  },

  getUbigeoCodeByDistrictName(departmentName: string, provinceName: string, districtName: string) {
    return findUbigeoCodeByDistrictName(departmentName, provinceName, districtName);
  },
};
