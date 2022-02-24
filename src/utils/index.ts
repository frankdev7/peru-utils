import { IUbigeo } from '../@types';

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

export { findByCode };
