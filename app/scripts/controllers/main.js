'use strict';

angular.module('keyIanoNewApp').controller('MainCtrl', function ($scope, Notes) {

  $scope.noteDown = function(e){
    var key = Notes.keyCodeLookup(e.keyCode);

    if (key && key.sound) {
      $scope.$broadcast('activeNote', key);
      key.active = true;
      key.sound.play();
    }
  };

  $scope.noteUp = function(e){
    var key = Notes.keyCodeLookup(e.keyCode);
    if (key && key.active) {
      key.active = false;
    }
  };

});
