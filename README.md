# PeruUse

## Getting Started

### Installation

```console
npm install peruuse --save
```

### Use in **ESM-compatible**

```js
import { ubigeo } from 'peruuse';
```

### Use in **CommonJS**

```js
const ubigeo = require('peruuse').ubigeo;
const { ubigeo } = require('peruuse');
```

### API

It's easy to use Day.js APIs to parse, validate, manipulate, and display dates and times.

```js
/**----------------------
 * Array of departments
 *@return [{ code: '01', name: 'Amazonas' } ...]
 *------------------------**/
ubigeo.getDepartments();

/**----------------------
 * Array of provinces of a department
 *@param code string // code department
 *@return [{ code: '0101', name: 'Chachapoyas' } ...]
 *------------------------**/

ubigeo.getProvince(code);

/**----------------------
 * Array of districts of a province
 *@param code string // code province
 *@return [{ code: '010101', name: 'Chachapoyas' } ...]
 *------------------------**/
ubigeo.getDistrict(code);
```

### ROADMAP

- [ ] List departments and include their provinces and districtslocation
- [ ] List provinces and include their districts
