<a
  href="https://travis-ci.org/Xotic750/is-primitive-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-primitive-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-primitive-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-primitive-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-primitive-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-primitive-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-primitive-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-primitive-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-primitive-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-primitive-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-primitive-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-primitive-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-primitive-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-primitive-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-primitive-x"></a>

## is-primitive-x

Returns true if the value is a primitive.

<a name="exp_module_is-primitive-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

Returns true if the value is a primitive.

**Kind**: Exported member  
**Returns**: <code>\*</code> - The value to test.

| Param | Type            | Description        |
| ----- | --------------- | ------------------ |
| [val] | <code>\*</code> | The value to test. |

**Example**

```js
import isPrimitive from 'is-primitive-x';

console.log(isPrimitive()); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive('abc')); // true
console.log(isPrimitive(Symbol())); // true

console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
console.log(isPrimitive(function() {})); // false
console.log(isPrimitive(new Date())); // false
```
