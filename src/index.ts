import { departments, district, province } from './data';
import { findByCode } from './utils';

export const ubigeo = {
  getDepartments() {
    return [...departments.values()];
  },

  getProvince(code: string) {
    return findByCode(code, province);
  },

  getDistrict(code: string) {
    return findByCode(code, district);
  },
};
