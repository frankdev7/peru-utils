import { departments, districts, provinces } from './data';
import { findByCode, findByFullUbigeoCode, findUbigeoCodeByDeparmentName, findUbigeoCodeByDistrictName, findUbigeoCodeByProvinceName } from './utils';

export const getDepartments = () => {
  return [...departments.values()];
};

export const getProvince = (code: string) => {
  return findByCode(code, provinces);
};

export const getDistrict = (code: string) => {
  return findByCode(code, districts);
};

export const getUbigeoDetails = (code: string) => {
  return findByFullUbigeoCode(code);
}

export const getUbigeoCodeByDeparmentName = (departmentName: string) => {
  return findUbigeoCodeByDeparmentName(departmentName);
}

export const getUbigeoCodeByProvinceName = (departmentName: string, provinceName: string) => {
  return findUbigeoCodeByProvinceName(departmentName, provinceName);
}

export const getUbigeoCodeByDistrictName = (departmentName: string, provinceName: string, districtName: string) => {
  return findUbigeoCodeByDistrictName(departmentName, provinceName, districtName);
}

