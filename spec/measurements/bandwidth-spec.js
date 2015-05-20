/*global describe, beforeEach, it, expect*/
'use strict';

var bandwidth = require('../../src/measurements/bandwidth');

describe('bandwidth', function () {
  it('should convert IOPS to properly formatted bandwidth bytes', function() {
    expect(bandwidth(15000, 1048576, 15000)).toEqual(104857600);
    expect(bandwidth(25000, 1048576, 15000)).toEqual(174762666.66666666);
  });
});
