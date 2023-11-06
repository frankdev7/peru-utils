# Peru-Utils 🇵🇪

Peru-Utils is a comprehensive npm library designed to simplify and enhance the way you work with Peru's Ubigeo codes

### Installation

To install this library, you can use the following command:

```bash
npm install peru-utils --save
```

### Use in **Browser**

```html
<script src="https://unpkg.com/peru-utils@2.0.0/dist/browser/index.min.js"></script>
<script>
  console.log(ubigeoINEI.getDepartments());
  console.log(ubigeoINEI.getProvince('01'));
  console.log(ubigeoINEI.getDistrict('0101'));
</script>
```

### Use in **ESM-compatible**

```js
import { ubigeoINEI } from 'https://unpkg.com/peru-utils@2.0.0/dist/index.mjs';
import { ubigeo, ubigeoINEI } from 'peru-utils';
```

### Use in **CommonJS**

```js
const ubigeoINEI = require('peru-utils').ubigeoINEI;
const { ubigeo, ubigeoINEI } = require('peru-utils');
```

### API

```js
/**----------------------
 * Ubigeo code by ID
 *@param code string '1'
 *@return 
    { 
      id: '1',
      inei: '010101',
      reniec: '010101',
    }
 *------------------------**/
ubigeo.findByIdUbigeo(code);

/**----------------------
 * Array of departments
 *@return [{ code: '01', name: 'Amazonas' } ...]
 *------------------------**/
ubigeoINEI.getDepartments();

/**----------------------
 * Array of provinces by code.department
 *@param code string
 *@return [{ code: '0101', name: 'Chachapoyas' } ...]
 *------------------------**/

ubigeoINEI.getProvince(code);

/**----------------------
 * Array of districts by code.province
 *@param code string
 *@return [{ code: '010101', name: 'Chachapoyas' } ...]
 *------------------------**/
ubigeoINEI.getDistrict(code);

/**----------------------
 * Ubigeo Details
 *@param code string '150101'
 *@return 
    { 
      code: '150101',
      department: 'Lima',
      province: 'Lima',
      district: 'Lima'
    }
 *------------------------**/
ubigeoINEI.getUbigeoDetails(code);

/**----------------------
 * Ubigeo code by District name
 *@param department string 'ICA'
 *@param province string 'PISCO'
 *@param district string 'INDEPENDENCIA'
 *@return
  {
    code: '110504',
    department: 'Ica',
    province: 'Pisco',
    district: 'Independencia',
    surfaceArea: '272.34',
    latitude: '-13.6939',
    longitude: '-76.0256'
  }
 *------------------------**/
ubigeoINEI.getUbigeoFullDetailsByDistrictName(department, province, district);

/**----------------------
 * Ubigeo code by Department name
 *@param department string 'Lima'
 *@return
  {
    code: '01',
    name: 'Lima'
  }
 *------------------------**/
ubigeoINEI.getUbigeoCodeByDeparmentName(department);

/**----------------------
 * Ubigeo code by Province name
 *@param department string 'ICA'
 *@param province string 'PISCO'
 *@return
  {
    code: '1005',
    name: 'PISCO'
  }
 *------------------------**/
ubigeoINEI.getUbigeoCodeByProvinceName(department, province);

/**----------------------
 * Ubigeo code by District name
 *@param department string 'ICA'
 *@param province string 'PISCO'
 *@param district string 'INDEPENDENCIA'
 *@return
  {
    code: '100504',
    name: 'Independencia'
  }
 *------------------------**/
ubigeoINEI.getUbigeoCodeByDistrictName(department, province, district);

```

## Contributing

Contributions to this project are welcome. Please open an issue or pull request on GitHub.

## License

This project is licensed under the ISC license.

This library is inspired by [ediaz2's peruuse](https://github.com/ediaz2/peruuse#readme)".