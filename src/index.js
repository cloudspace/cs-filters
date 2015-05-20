// Require measurements filters
Bytes    = require('./measurements/bytes');
KiloCase = require('./measurements/kilo-case');
KiloCase = require('./measurements/bandwidth');

// Require collections filters
StartFrom = require('./collections/start-from');

var PublicInterface = {
  'Measurements': {
    'Bytes':     Bytes,
    'Bandwidth': Bandwidth,
    'KiloCase':  KiloCase
  },
  'Collections': {
    'StartFrom': StartFrom
  }
};

module.exports = PublicInterface;
