import hasWorkingBind from 'has-working-bind-x';
import pusher from 'util-pusher-x';

const {bind: nativeBind, call} = pusher;
const ERROR_MESSAGE = 'bind called on incompatible ';
const object = {};
const ObjectCtr = object.constructor;
const toStringTag = object.toString;
const funcType = '[object Function]';
const ZERO = 0;
const argsOffset = 2;

const getMax = function getMax(a, b) {
  return a >= b ? a : b;
};

const assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && toStringTag.apply(value) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + value);
  }
};

const boundFns = [
  function zero(binder) {
    return function boundFn() {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments));
    };
  },
  function one(binder, boundLength) {
    return function boundFn(a) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments, boundLength, [a]));
    };
  },
  function two(binder, boundLength) {
    return function boundFn(a, b) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments, boundLength, [a, b]));
    };
  },
  function three(binder, boundLength) {
    /* eslint-disable-next-line max-params */
    return function boundFn(a, b, c) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments, boundLength, [a, b, c]));
    };
  },
  function four(binder, boundLength) {
    /* eslint-disable-next-line max-params */
    return function boundFn(a, b, c, d) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments, boundLength, [a, b, c, d]));
    };
  },
  function five(binder, boundLength) {
    /* eslint-disable-next-line max-params */
    return function boundFn(a, b, c, d, e) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments, boundLength, [a, b, c, d, e]));
    };
  },
  function six(binder, boundLength) {
    /* eslint-disable-next-line max-params */
    return function boundFn(a, b, c, d, e, f) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments, boundLength, [a, b, c, d, e, f]));
    };
  },
  function seven(binder, boundLength) {
    /* eslint-disable-next-line max-params */
    return function boundFn(a, b, c, d, e, f, g) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments, boundLength, [a, b, c, d, e, f, g]));
    };
  },
  function eight(binder, boundLength) {
    /* eslint-disable-next-line max-params */
    return function boundFn(a, b, c, d, e, f, g, h) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      return binder.apply(this, pusher(arguments, boundLength, [a, b, c, d, e, f, g, h]));
    };
  },
];

const getBoundFn = function getBoundFn(args) {
  const [binder, target, bindArgs] = args;
  const boundLength = getMax(ZERO, target.length - getMax(ZERO, bindArgs.length - argsOffset));
  const fn = boundFns[boundLength];
  const boundFn = fn ? fn(binder, boundLength) : boundFns[ZERO](binder);

  if (target.prototype) {
    /* eslint-disable-next-line lodash/prefer-noop */
    const Empty = function Empty() {};

    Empty.prototype = target.prototype;
    boundFn.prototype = new Empty();
    Empty.prototype = null;
  }

  return boundFn;
};

const getResult = function getResult(target, boundArgs) {
  /* eslint-disable-next-line babel/no-invalid-this */
  const result = target.apply(this, boundArgs);

  /* eslint-disable-next-line babel/no-invalid-this,babel/new-cap */
  return ObjectCtr(result) === result ? result : this;
};

export const implementation = function bind(target, thisArg) {
  assertIsFunction(target);
  /* eslint-disable-next-line prefer-rest-params */
  const bindArgs = arguments;

  let bound;
  const binder = function binder() {
    /* eslint-disable-next-line prefer-rest-params */
    const boundArgs = pusher(arguments, ZERO, pusher(bindArgs, argsOffset));

    /* eslint-disable-next-line babel/no-invalid-this */
    return this instanceof bound ? getResult.apply(this, [target, boundArgs]) : target.apply(thisArg, boundArgs);
  };

  bound = getBoundFn([binder, target, bindArgs]);

  return bound;
};

/**
 * The bind() method creates a new function that, when called, has its this
 * keyword set to the provided value, with a given sequence of arguments
 * preceding any provided when the new function is called.
 *
 * @function bind
 * @param {Function} target - The target function.
 * @param {*} [thisArg] - The value to be passed as the this parameter to the target
 *  function when the bound function is called. The value is ignored if the
 *  bound function is constructed using the new operator.
 * @param {...*} [args] - Arguments to prepend to arguments provided to the bound
 *  function when invoking the target function.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The bound function.
 */
const $bind = hasWorkingBind ? call.bind(nativeBind) : implementation;

export default $bind;
