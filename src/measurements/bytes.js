/*
 * Returns a number of bytes translated into a readable,
 * formatted version with the proper suffix.
 *
 * @bytes: number
 * @binary: boolean
 * @decimalPlaces: number
 *
 */

var Bytes = function (bytes, binary, decimalPlaces) {

  var thresh = binary ? 1024 : 1000,
      binaryUnits = ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'],
      decimalUnits = ['KB','MB','GB','TB','PB','EB','ZB','YB'],
      units = binary ? binaryUnits : decimalUnits,
      u = -1;

  if (!bytes) {
    return '0 B';
  }

  if (bytes < thresh) {
    return (decimalPlaces || decimalPlaces === 0) ? bytes.toFixed(decimalPlaces) + ' B' : bytes.toFixed(1) + ' B';
  }

  do {
    bytes /= thresh;
    ++u;
  } while (bytes >= thresh);

  return bytes.toFixed(decimalPlaces) + ' ' + units[u];
};

module.exports = Bytes;
