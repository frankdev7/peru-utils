# PeruUse

## Getting Started

### Installation

```console
npm install peruuse --save
```

### Use in **ESM-compatible**

```js
import { ubigeo } from 'https://unpkg.com/peruuse@1.0.0/lib/index.mjs';
import { ubigeo } from 'peruuse';
```

### Use in **CommonJS**

```js
const ubigeo = require('peruuse').ubigeo;
const { ubigeo } = require('peruuse');
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
```

### ROADMAP

- [ ] List departments and include provinces
- [ ] List provinces and include their districts
