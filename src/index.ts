import type { IUbigeo } from './@types';
import { departments, district, province } from './data';
import { findByCode } from './utils';

class Ubigeo {
  getDepartments(): Array<IUbigeo> {
    return [...departments.values()];
  }

  getProvince(code: string): Array<IUbigeo | undefined> | undefined {
    return findByCode(code, province);
  }

  getDistrict(code: string): Array<IUbigeo | undefined> | undefined {
    return findByCode(code, district);
  }
}

const ubigeo = new Ubigeo();

export { ubigeo };
