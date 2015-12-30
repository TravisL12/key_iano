'use strict';

/**
 * @ngdoc function
 * @name keyIanoNewApp.controller:KeyboardCtrl
 * @description
 * # KeyboardCtrl
 * Controller of the keyIanoNewApp
 */
angular.module('keyIanoNewApp')
  .controller('KeyboardCtrl', function ($scope, Notes) {
    $scope.keyboardLayout = Notes.keys();
  });
