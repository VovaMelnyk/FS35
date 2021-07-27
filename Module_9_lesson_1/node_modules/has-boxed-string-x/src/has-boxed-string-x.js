const string = 'a';
const boxedString = {}.constructor(string);

/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */
const hasBoxed = boxedString[0] === string && 0 in boxedString;

export default hasBoxed;
