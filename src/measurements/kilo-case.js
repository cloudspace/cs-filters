/*
 * Returns a measurement translated into a readable,
 * formatted version with the proper suffix.
 *
 * @value: number
 * @decimalPlaces: number
 *
 */

var KiloCase = function (value, decimalPlaces) {
  var thresh = 1000,
      units = ['K','M','G','T','P','E','Z','Y'],
      u = -1;

  if (value < thresh) {
    return value.toFixed(decimalPlaces);
  }

  do {
    value /= thresh;
    ++u;
  } while (value >= thresh);

  return value.toFixed(decimalPlaces) + ' ' + units[u];
};

module.exports = KiloCase;
