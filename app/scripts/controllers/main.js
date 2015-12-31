'use strict';

/**
 * @ngdoc function
 * @name keyIanoNewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the keyIanoNewApp
 */
angular.module('keyIanoNewApp')
  .controller('MainCtrl', function ($scope, Notes) {

    $scope.octave = 3;

    function keyLookup(e) {
      return Notes.codeLookup(e.keyCode);
    }

    $scope.noteDown = function(e){
      var key = keyLookup(e);

      if (key && key.sound) {
        $scope.$broadcast('activeNote', key);
        key.active = true;
        key.sound.play();
      }
    };

    $scope.noteUp = function(e){
      var key = keyLookup(e);
      if (key && key.active) {
        key.active = false;
      }
    };

  });
