/*global describe, it, expect*/
'use strict';

var startFrom = require('../../src/collections/start-from');

describe('startFrom', function () {
  it('should start the array from the given starting positon', function() {
    expect(startFrom([1,2,3,4,5], 1)).toEqual([2,3,4,5]);
  });
});
