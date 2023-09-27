import { IUbigeo, IUbigeoDetails } from '../@types';
import { departments, districts, provinces } from '../data';

const findByCode = (
  code: string,
  map: Map<string, IUbigeo>
): Array<IUbigeo | undefined> | undefined => {
  let i = 0;
  let uid;
  const arr: Array<IUbigeo | undefined> = [];

  do {
    i += 1;
    uid = `${code}${String(i).padStart(2, '0')}`;
    if (map.has(uid)) arr.push(map.get(uid));
  } while (map.has(uid));

  return arr;
};

const findByFullUbigeoCode = (
  code: string
): IUbigeoDetails | undefined => {
  if (code.length !== 6) {
    return undefined;
  }

  const deparmentCode = code.substring(0, 2);
  const provinceCode = code.substring(0, 4);
  const districtCode = code;

  const deparment = departments.get(deparmentCode);
  const province = provinces.get(provinceCode);
  const district = districts.get(districtCode);

  if (!deparment || !province || !district) {
    return undefined;
  }

  return {
    deparment: deparment.name,
    province: province.name,
    district: district.name
  }
}

const findUbigeoCodeByDeparmentName = (
  name: string
): string | undefined => {
  for (const [code, department] of departments.entries()) {
    if (department.name.toUpperCase() === name.toUpperCase()) {
      return code;
    }
  }
  return undefined;
}

const findUbigeoCodeByProvinceName = (
  name: string
): string | undefined => {
  for (const [code, province] of provinces.entries()) {
    if (province.name.toUpperCase() === name.toUpperCase()) {
      return code;
    }
  }
  return undefined;
}

const findUbigeoCodeByDistrictName = (
  name: string
): string | undefined => {
  for (const [code, district] of districts.entries()) {
    if (district.name.toUpperCase() === name.toUpperCase()) {
      return code;
    }
  }
  return undefined;
}

export { findByCode, findByFullUbigeoCode, findUbigeoCodeByDeparmentName, findUbigeoCodeByDistrictName, findUbigeoCodeByProvinceName };
