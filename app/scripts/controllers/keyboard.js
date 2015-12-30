'use strict';

/**
 * @ngdoc function
 * @name keyIanoNewApp.controller:KeyboardCtrl
 * @description
 * # KeyboardCtrl
 * Controller of the keyIanoNewApp
 */
angular.module('keyIanoNewApp')
  .controller('KeyboardCtrl', function ($scope, Notes, KeyboardLayout) {
    $scope.keyboardLayout = KeyboardLayout;

    function playSound(e, key) {
      if (key.note && key.note.sound) {
        key.active = true;
        key.note.sound.play();
        key.note.sound._onend[0] = function() {
          key.active = false;
        };
      }
    }

    $scope.noteClicked = function(e) {
      var key = this.key;
      key.note = Notes.charLookup(key.key.toLowerCase());
      playSound(e, key);
    };

    $scope.notePressed = function(e){
      e.preventDefault();
      var key = {};
      key.note = Notes.codeLookup(e.keyCode);
      playSound(e, key);
    };

  });
