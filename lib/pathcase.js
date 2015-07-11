/**
 * Convert string into path case.
 * Join punctuation with slash.
 * @memberof module:stringcase/lib
 * @function pathcase
 * @param {string} str - String to convert.
 * @returns {string} str - Path cased string.
 */

"use strict";

var snakecase = require('./snakecase');

/** @lends pathcase */
function pathcase(str) {
    return snakecase(str).replace(/_/g, '/');
}

module.exports = pathcase;