import isPrimitive from 'is-primitive-x';
import isString from 'is-string';
import hasBoxed from 'has-boxed-string-x';
import hasWorkingBind from 'has-working-bind-x';
var EMPTY_STRING = '';
var split = EMPTY_STRING.split;
var max = Math.max;
var bind = isPrimitive.bind,
    call = isPrimitive.call;
export var stringSplit = function stringSplit(string, pattern) {
  // noinspection JSUnresolvedFunction
  return split.call(string, pattern);
};
export var $split = hasWorkingBind ? bind.call(call, split) : stringSplit;
export var getIterable = function getIterable(arrayLike) {
  // noinspection JSUnresolvedFunction
  return isString(arrayLike) ? $split(arrayLike, EMPTY_STRING) : arrayLike;
}; // eslint-disable jsdoc/no-undefined-types
// noinspection JSCommentMatchesSignature

/**
 * This pushes or concatenates into a new or existing array.
 *
 * @param {Array} arrayLike - The source.
 * @param {number} [from=0] - The from source index.
 * @param {Array} [target=[]] - The target array.
 * @returns {*} The target array.
 */
// eslint-enable jsdoc/no-undefined-types

var pusher = function pusher(arrayLike, from) {
  /* eslint-disable-next-line prefer-rest-params */
  var target = arguments.length > 2 ? arguments[2] : [];

  if (typeof arrayLike !== 'string' && isPrimitive(arrayLike)) {
    return target;
  }

  var iterable = hasBoxed ? arrayLike : getIterable(arrayLike);
  var length = iterable.length;

  for (var i = max(0, from) || 0; i < length; i += 1) {
    target[target.length] = arrayLike[i];
  }

  return target;
};

export default pusher;

//# sourceMappingURL=util-pusher-x.esm.js.map