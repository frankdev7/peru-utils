import { IUbigeo, IUbigeoDetails, IUbigeoFullDetails } from '../@types';
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

const findDetailsByUbigeoCode = (
  code: string
): IUbigeoDetails | undefined => {
  if (code.length !== 6) {
    return undefined;
  }

  const departmentCode = code.substring(0, 2);
  const provinceCode = code.substring(0, 4);
  const districtCode = code;

  const department = departments.get(departmentCode);
  const province = provinces.get(provinceCode);
  const district = districts.get(districtCode);

  if (!department || !province || !district) {
    return undefined;
  }

  return {
    code: district.code,
    department: department.name,
    province: province.name,
    district: district.name,
  }
}

const findFullDetailsByUbigeoCode = (
  code: string
): IUbigeoFullDetails | undefined => {
  if (code.length !== 6) {
    return undefined;
  }

  const departmentCode = code.substring(0, 2);
  const provinceCode = code.substring(0, 4);
  const districtCode = code;

  const department = departments.get(departmentCode);
  const province = provinces.get(provinceCode);
  const district = districts.get(districtCode);

  if (!department || !province || !district) {
    return undefined;
  }

  return {
    code: district.code,
    department: department.name,
    province: province.name,
    district: district.name,
    surfaceArea: district.surfaceArea,
    latitude: district.latitude,
    longitude: district.longitude
  }
}

const findUbigeoCodeByDeparmentName = (
  departmentName: string
): IUbigeo | undefined => {
  for (const [code, department] of departments.entries()) {
    if (department.name.toUpperCase() === departmentName.toUpperCase()) {
      return {
        code,
        name: department.name
      };
    }
  }
  return undefined;
}

const findUbigeoCodeByProvinceName = (
  departmentName: string,
  provinceName: string
): IUbigeo | undefined => {
  const department = findUbigeoCodeByDeparmentName(departmentName);

  if (department) {
    for (const [code, province] of provinces.entries()) {
      if (province.name.toUpperCase() === provinceName.toUpperCase() && code.includes(department.code)) {
        return {
          code,
          name: province.name
        };
      }
    }
  }

  return undefined;
}

const findUbigeoCodeByDistrictName = (
  departmentName: string,
  provinceName: string,
  districtName: string
): IUbigeo | undefined => {
  const province = findUbigeoCodeByProvinceName(departmentName, provinceName);

  if (province) {
    for (const [code, district] of districts.entries()) {
      if (district.name.toUpperCase() === districtName.toUpperCase() && code.includes(province.code)) {
        return {
          code,
          name: district.name
        };
      }
    }
  }

  return undefined;
}

const findUbigeoFullDetailsByDistrictName = (
  departmentName: string,
  provinceName: string,
  districtName: string
): IUbigeoFullDetails | undefined => {
  const department = findUbigeoCodeByDeparmentName(departmentName);
  const province = findUbigeoCodeByProvinceName(departmentName, provinceName);

  if (department && province) {
    for (const [code, district] of districts.entries()) {
      if (district.name.toUpperCase() === districtName.toUpperCase() && code.includes(province.code)) {
        return {
          code,
          department: department.name,
          province: province.name,
          district: district.name,
          surfaceArea: district.surfaceArea,
          latitude: district.latitude,
          longitude: district.longitude
        };
      }
    }
  }

  return undefined;
}

export { findByCode, findDetailsByUbigeoCode, findFullDetailsByUbigeoCode, findUbigeoCodeByDeparmentName, findUbigeoCodeByDistrictName, findUbigeoCodeByProvinceName, findUbigeoFullDetailsByDistrictName };
