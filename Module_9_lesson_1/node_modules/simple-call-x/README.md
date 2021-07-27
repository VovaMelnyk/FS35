<a
  href="https://travis-ci.org/Xotic750/simple-call-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/simple-call-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/simple-call-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/simple-call-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/simple-call-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/simple-call-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/simple-call-x"
  title="npm version">
<img src="https://badge.fury.io/js/simple-call-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/simple-call-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/simple-call-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/simple-call-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/simple-call-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/simple-call-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/simple-call-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_simple-call-x"></a>

## simple-call-x

The abstract operation Call is used to call the [[Call]] internal method of a function object. The operation is called with
arguments F, V , and optionally argumentsList where F is the function object, V is an ECMAScript language value that is the
this value of the [[Call]], and argumentsList is the value passed to the corresponding argument of the internal method.
If argumentsList is not present, an empty List is used as its value.

<a name="exp_module_simple-call-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

The abstract operation Call is used to call the [[Call]] internal method of a function object.

**Kind**: Exported member  
**Returns**: <code>\*</code> - The target.  
**Throws**:

- <code>TypeError</code> If target is not a function.

* @param {Function} F - The target function.
* @param {\*} [V] - The context.
* @param {Array} [args] - Arguments to call the function with.

| Param  | Type                  | Description                          |
| ------ | --------------------- | ------------------------------------ |
| F      | <code>Function</code> | The target function.                 |
| [V]    | <code>\*</code>       | The context.                         |
| [args] | <code>Array</code>    | Arguments to call the function with. |

**Example**

```js
import call from 'simple-call-x';

console.log(call([].split, '123', '')); // ['1', '2', '3']
```
