'use strict';

describe('Service: KeyboardLayout', function () {

  // load the service's module
  beforeEach(module('keyIanoNewApp'));

  // instantiate service
  var KeyboardLayout;
  beforeEach(inject(function (_KeyboardLayout_) {
    KeyboardLayout = _KeyboardLayout_;
  }));

  it('should do something', function () {
    expect(!!KeyboardLayout).toBe(true);
  });

});
