/*
 * A filter that slices a collection.
 * This is usefule when telling pagination where to begin.
 *
 * @input: parsable to a number
 * @start: number
 */

var StartFrom = function(input, start) {
  start = +start; //parse to int
  return input.slice(start);
};

module.exports = StartFrom;
