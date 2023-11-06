export interface IUbigeo {
  code: string;
  name: string;
}

export interface IUbigeoDetails {
  code: string;
  department: string;
  province: string;
  district: string;
}

export interface IUbigeoFullDetails extends IUbigeoDetails {
  surfaceArea: string;
  latitude: string;
  longitude: string;
}

export interface IUbigeoFullDetailsData extends IUbigeo {
  surfaceArea: string;
  latitude: string;
  longitude: string;
}

export interface IdUbigeo {
  id: string;
  reniec: string;
  inei: string;
}