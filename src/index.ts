import { departments, districts, provinces } from './data';
import { findByCode, findById, findDetailsByUbigeoCode, findFullDetailsByUbigeoCode, findUbigeoCodeByDeparmentName, findUbigeoCodeByDistrictName, findUbigeoCodeByProvinceName, findUbigeoFullDetailsByDistrictName } from './utils';

export const ubigeoINEI = {

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
    return findDetailsByUbigeoCode(code);
  },

  getUbigeoFullDetails(code: string) {
    return findFullDetailsByUbigeoCode(code);
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

  getUbigeoFullDetailsByDistrictName(departmentName: string, provinceName: string, districtName: string) {
    return findUbigeoFullDetailsByDistrictName(departmentName, provinceName, districtName);
  },
};

export const ubigeo = {
  findByIdUbigeo(id: string) {
    return findById(id);
  },
}
