/**
 * Returns true if the value is a primitive.
 *
 * @param {*} [val] - The value to test.
 * @returns {boolean} True if a primitive, otherwise false..
 */
const isPrimitive = function isPrimitive(val) {
  return typeof val === 'object' ? val === null : typeof val !== 'function';
};

export default isPrimitive;
