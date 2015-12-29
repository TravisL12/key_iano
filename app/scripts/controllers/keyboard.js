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

    function playSound(e, note) {
      if (note && note.sound) {
        e.target.className = 'keydown';
        note.sound.play();
        note.sound._onend[0] = function() {
          e.target.className = '';
        };
      }
    }

    $scope.noteClicked = function(e) {
      var note = Notes.charLookup(this.key.key);
      playSound(e, note);
    };

    $scope.notePressed = function(e){
      e.preventDefault();
      var note = Notes.codeLookup(e.keyCode);
      playSound(e, note);
    };

  });
