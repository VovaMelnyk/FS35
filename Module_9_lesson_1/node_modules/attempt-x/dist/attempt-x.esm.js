import pusher from 'util-pusher-x';
import call from 'simple-call-x'; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @function attempt
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
// eslint-disable jsdoc/check-param-names

var attempt = function attempt(fn) {
  try {
    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      value: call(fn, this, pusher(arguments, 1))
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};

export default attempt;

//# sourceMappingURL=attempt-x.esm.js.map