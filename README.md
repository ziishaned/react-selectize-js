## react-selectize-js

Light weight selectize.js component for react.

## Install

```bash
yarn add react-selectize-js
```

## Usage

```js
import { Select } from 'react-selectize-js';

<Select onChange={(event) => console.log(event.target.value)}>
  <option value="1">Chuck Tesla</option>
  <option value="2">Elon Musk</option>
  <option value="3">Paweł Kuna</option>
  <option value="4">Nikola Tesla</option>
</Select>
```
