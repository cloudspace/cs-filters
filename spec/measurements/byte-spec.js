var bytes = require('../../src/measurements/bytes');

describe('bytes', function () {
  it('should translate bytes to binary range values', function () {
    //bytes filter will attempt to round to 1
    expect(bytes(null, true)).toEqual('0 B');
    expect(bytes(null, true, 0)).toEqual('0 B');
    expect(bytes(123, true, 0)).toEqual('123 B');
    expect(bytes(123, true)).toEqual('123.0 B');
    expect(bytes(1230, true, 2)).toEqual('1.20 KiB');
    expect(bytes(1234567, true, 2)).toEqual('1.18 MiB');
    expect(bytes(1234567890, true, 2)).toEqual('1.15 GiB');
  });

  it('should translate bytes to decimal range values', function () {
    expect(bytes(123, false, 0)).toEqual('123 B');
    expect(bytes(1230, false, 2)).toEqual('1.23 KB');
    expect(bytes(1234567, false, 2)).toEqual('1.23 MB');
    expect(bytes(1234567890, false, 2)).toEqual('1.23 GB');
  });

  it('should allow rounding of the translated bytes', function () {
    expect(bytes(1234567890, false, 0)).toEqual('1 GB');
    expect(bytes(1234567890, false, 1)).toEqual('1.2 GB');
    expect(bytes(1234567890, false, 2)).toEqual('1.23 GB');
  });
});
