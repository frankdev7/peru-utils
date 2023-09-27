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

export const getUbigeoCodeByDeparmentName = (code: string) => {
  return findUbigeoCodeByDeparmentName(code);
}

export const getUbigeoCodeByProvinceName = (code: string) => {
  return findUbigeoCodeByProvinceName(code);
}

export const getUbigeoCodeByDistrictName = (code: string) => {
  return findUbigeoCodeByDistrictName(code);
}

