'use strict';

describe('Controller: KeyboardCtrl', function () {

  // load the controller's module
  beforeEach(module('keyIanoNewApp'));

  var KeyboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KeyboardCtrl = $controller('KeyboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KeyboardCtrl.awesomeThings.length).toBe(3);
  });
});
