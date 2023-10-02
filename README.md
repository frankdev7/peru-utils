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
  console.log(ubigeo.getDepartments());
  console.log(ubigeo.getProvince('01'));
  console.log(ubigeo.getDistrict('0101'));
</script>
```

### Use in **ESM-compatible**

```js
import { ubigeo } from 'https://unpkg.com/peru-utils@2.0.0/dist/index.mjs';
import { ubigeo } from 'peru-utils';
```

### Use in **CommonJS**

```js
const ubigeo = require('peru-utils').ubigeo;
const { ubigeo } = require('peru-utils');
```

### API

```js
/**----------------------
 * Array of departments
 *@return [{ code: '01', name: 'Amazonas' } ...]
 *------------------------**/
ubigeo.getDepartments();

/**----------------------
 * Array of provinces by code.department
 *@param code string
 *@return [{ code: '0101', name: 'Chachapoyas' } ...]
 *------------------------**/

ubigeo.getProvince(code);

/**----------------------
 * Array of districts by code.province
 *@param code string
 *@return [{ code: '010101', name: 'Chachapoyas' } ...]
 *------------------------**/
ubigeo.getDistrict(code);

/**----------------------
 * Ubigeo Details
 *@param code string '150101'
 *@return 
    { 
      deparment: 'Lima',
      province: 'Lima',
      district: 'Lima'
    }
 *------------------------**/
ubigeo.getUbigeoDetails(code);

/**----------------------
 * Ubigeo code by Department name
 *@param deparment string 'Lima'
 *@return
  {
    code: '01',
    name: 'Lima'
  }
 *------------------------**/
ubigeo.getUbigeoCodeByDeparmentName(deparment);

/**----------------------
 * Ubigeo code by Province name
 *@param deparment string 'ICA'
 *@param province string 'PISCO'
 *@return
  {
    code: '1005',
    name: 'PISCO'
  }
 *------------------------**/
ubigeo.getUbigeoCodeByProvinceName(deparment, province);

/**----------------------
 * Ubigeo code by District name
 *@param deparment string 'ICA'
 *@param province string 'PISCO'
 *@param district string 'INDEPENDENCIA'
 *@return
  {
    code: '100504',
    name: 'Independencia'
  }
 *------------------------**/
ubigeo.getUbigeoCodeByDistrictName(deparment, province, district);

```

## Contributing

Contributions to this project are welcome. Please open an issue or pull request on GitHub.

## License

This project is licensed under the ISC license.

This library is inspired by [ediaz2's peruuse](https://github.com/ediaz2/peruuse#readme)".