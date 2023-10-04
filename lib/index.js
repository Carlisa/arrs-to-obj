"use strict";

/**
 * arrsToObj
 * Converts two arrays into an object.
 *
 * @param {Array} names - The names array.
 * @param {Array} values - The values array.
 * @returns {Object} The resulting object.
 */
module.exports = function arrsToObj(names, values) {
    // Initialize an empty object to store the result.
    const obj = {};

    // Validate that both names and values are arrays of the same length.
    if (!Array.isArray(names) || !Array.isArray(values) || names.length !== values.length) {
        // If not, return an empty object.
        return obj;
    }

    // Use a for...of loop to iterate through the arrays and create the object.
    for (const [index, name] of names.entries()) {
        obj[name] = values[index];
    }

    // Return the resulting object.
    return obj;
};
