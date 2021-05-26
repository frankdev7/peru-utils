import { departments, district, province } from './data';
import { IUbigeo } from './types';
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
