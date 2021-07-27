import pusher from 'util-pusher-x';
import bind from 'simple-bind-x';

const $TypeError = TypeError;
const {apply: nativeApply, call: nativeCall} = bind;
const $apply = bind(nativeCall, nativeApply);
const toStringTag = bind(nativeApply, {}.toString);
const ERROR_MESSAGE = ' is not a function';
const funcType = '[object Function]';

const assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && toStringTag(value) !== funcType) {
    throw new $TypeError(value + ERROR_MESSAGE);
  }

  return value;
};

// eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature
/**
 * The abstract operation Call is used to call the [[Call]] internal method of a function object.
 *
 * @function call
 * @param {Function} F - The target function.
 * @param {*} [V] - The context.
 * @param {Array} [args] - Argument to call the function with.
 * @throws {TypeError} If target is not a function.
 * @returns {*} The the result of invoking the function.
 * @see https://www.ecma-international.org/ecma-262/6.0/#sec-call
 */
// eslint-enable jsdoc/check-param-names
const call = function call(F, V) {
  /* eslint-disable-next-line prefer-rest-params */
  return $apply(assertIsFunction(F), V, pusher(arguments[2]));
};

export default call;
