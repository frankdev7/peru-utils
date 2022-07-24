import { departments, district, province } from './data';
import { findByCode } from './utils';

export const getDepartments = () => {
  return [...departments.values()];
};

export const getProvince = (code: string) => {
  return findByCode(code, province);
};

export const getDistrict = (code: string) => {
  return findByCode(code, district);
};
