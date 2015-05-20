var kiloCase = require('../../src/measurements/kilo-case');

describe('kiloCase', function () {
  it('should translate bytes to decimal range values', function () {
    expect(kiloCase(0.123, 1)).toEqual('0.1');
    expect(kiloCase(123, 0)).toEqual('123');
    expect(kiloCase(1230, 2)).toEqual('1.23 K');
    expect(kiloCase(1234567, 2)).toEqual('1.23 M');
    expect(kiloCase(1234567890, 2)).toEqual('1.23 G');
  });

  it('should allow rounding of the translated bytes', function () {
    expect(kiloCase(1234567890, 0)).toEqual('1 G');
    expect(kiloCase(1234567890, 1)).toEqual('1.2 G');
    expect(kiloCase(1234567890, 2)).toEqual('1.23 G');
  });
});
