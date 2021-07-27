<a
  href="https://travis-ci.org/Xotic750/simple-bind-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/simple-bind-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/simple-bind-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/simple-bind-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/simple-bind-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/simple-bind-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/simple-bind-x"
  title="npm version">
<img src="https://badge.fury.io/js/simple-bind-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/simple-bind-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/simple-bind-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/simple-bind-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/simple-bind-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/simple-bind-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/simple-bind-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_simple-bind-x"></a>

## simple-bind-x

Creates a new function with a bound sequence of arguments. Creates a new function with a bound sequence of arguments.
Compliant to 8 arguments.

<a name="exp_module_simple-bind-x--module.exports"></a>

### `module.exports` ⇒ <code>function</code> ⏏

The bind() method creates a new function that, when called, has its this
keyword set to the provided value, with a given sequence of arguments
preceding any provided when the new function is called.

**Kind**: Exported member  
**Returns**: <code>function</code> - The bound function.  
**Throws**:

- <code>TypeError</code> If target is not a function.

| Param   | Type                  | Description                                                                                                                                                                              |
| ------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target  | <code>function</code> | The target function.                                                                                                                                                                     |
| thisArg | <code>\*</code>       | The value to be passed as the this parameter to the target function when the bound function is called. The value is ignored if the bound function is constructed using the new operator. |
| [args]  | <code>...\*</code>    | Arguments to prepend to arguments provided to the bound function when invoking the target function.                                                                                      |

**Example**

```js
import bind from 'simple-bind-x';

this.x = 9; // this refers to global "window" object here in the browser
const module = {
  x: 81,
  getX: function() {
    return this.x;
  },
};

console.log(module.getX()); // 81

const retrieveX = module.getX;
console.log(retrieveX());
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
const boundGetX = bind(retrieveX, module);
console.log(boundGetX()); // 81
```
