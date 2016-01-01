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
    $scope.notes = Notes.notes();
    $scope.editMode = false;

    $scope.activeNotes = [];

    $scope.$on('activeNote', function(event, note) {
      $scope.activeNotes.push(note);
    });

    $scope.$on('removeActiveNote', function() {
      $scope.activeNotes.shift();
      $scope.$apply();
    });

  });
