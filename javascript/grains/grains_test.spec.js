var Grains = require('./grains');

describe("Grains", function () {
  var grains = new Grains();

  it("square 1", function () {
    expect(grains.square(1)).toEqual(1);
  });

  it("square 2", function () {
    expect(grains.square(2)).toEqual(2);
  });

  it("square 3", function () {
    expect(grains.square(3)).toEqual(4);
  });

  it("square 4", function () {
    expect(grains.square(4)).toEqual(8);
  });

  it("square 16", function () {
    expect(grains.square(16)).toEqual(32768);
  });

  it("square 32", function () {
    expect(grains.square(32)).toEqual(2147483648);
  });

  it("square 64", function () {
    expect(grains.square(64)).toEqual(9223372036854775808);
  });

  it("total", function () {
    expect(grains.total()).toEqual(18446744073709551615);
  });
});
