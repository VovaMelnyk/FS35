import isPrimitive from 'is-primitive-x';
import isString from 'is-string';
import hasBoxed from 'has-boxed-string-x';
import hasWorkingBind from 'has-working-bind-x';

const EMPTY_STRING = '';
const {split} = EMPTY_STRING;
const {max} = Math;
const {bind, call} = isPrimitive;
export const stringSplit = function stringSplit(string, pattern) {
  // noinspection JSUnresolvedFunction
  return split.call(string, pattern);
};

export const $split = hasWorkingBind ? bind.call(call, split) : stringSplit;

export const getIterable = function getIterable(arrayLike) {
  // noinspection JSUnresolvedFunction
  return isString(arrayLike) ? $split(arrayLike, EMPTY_STRING) : arrayLike;
};

// eslint-disable jsdoc/no-undefined-types
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
const pusher = function pusher(arrayLike, from) {
  /* eslint-disable-next-line prefer-rest-params */
  const target = arguments.length > 2 ? arguments[2] : [];

  if (typeof arrayLike !== 'string' && isPrimitive(arrayLike)) {
    return target;
  }

  const iterable = hasBoxed ? arrayLike : getIterable(arrayLike);
  const {length} = iterable;
  for (let i = max(0, from) || 0; i < length; i += 1) {
    target[target.length] = arrayLike[i];
  }

  return target;
};

export default pusher;
