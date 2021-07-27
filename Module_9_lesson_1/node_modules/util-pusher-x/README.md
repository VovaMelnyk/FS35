<a
  href="https://travis-ci.org/Xotic750/util-pusher-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/util-pusher-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/util-pusher-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/util-pusher-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/util-pusher-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/util-pusher-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/util-pusher-x"
  title="npm version">
<img src="https://badge.fury.io/js/util-pusher-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/util-pusher-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/util-pusher-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/util-pusher-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/util-pusher-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/util-pusher-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/util-pusher-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_util-pusher-x"></a>

## util-pusher-x

This pushes or concatenates into a new or existing array.

<a name="exp_module_util-pusher-x--module.exports"></a>

### `module.exports` ⇒ <code>(arrayLike, [from], [target])</code> ⏏

This pushes or concatenates into a new or existing array.

**Kind**: Exported member

| Param     | Type                   | Description            |
| --------- | ---------------------- | ---------------------- |
| arrayLike | <code>ArrayLike</code> | The source.            |
| [from]    | <code>number</code>    | The from source index. |
| [target]  | <code>Array</code>     | The target array.      |

**Example**

```js
import pusher from 'util-pusher-x';

const x = [1, 2, 3];
console.log(pusher([4, 5, 6], 1, x)); // [1, 2, 3, 5, 6]
```
