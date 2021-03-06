'use strict';

/**
 * @ngdoc function
 * @name keyIanoNewApp.controller:KeyboardCtrl
 * @description
 * # KeyboardCtrl
 * Controller of the keyIanoNewApp
 */
angular.module('keyIanoNewApp').controller('KeyboardCtrl', function ($scope, Notes) {
  $scope.keyboardLayout = Notes.keys;
  $scope.notes = Notes.notes;
  $scope.activeNotes = [];

  $scope.clickNote = function () {
    var key = Notes.keyCodeLookup(this.key.keyCode);

    if (key && key.sound) {
      $scope.$broadcast('activeNote', key);
      key.sound.play();
    }
  };

  $scope.$on('activeNote', function(event, note) {
    $scope.activeNotes.push(note);
  });

  $scope.$on('removeActiveNote', function() {
    $scope.activeNotes.shift();
    $scope.$apply();
  });

});

// Music format
// http://www.answers.com/Q/How_do_you_play_three_blind_mice_on_the_piano
// var threeBlindMice = [
//   { notes: ['E3'] }, { notes: ['D3'] }, { notes: ['C3'] },
//   { notes: ['E3'] }, { notes: ['D3'] }, { notes: ['C3'] },

//   { notes: ['G3'] }, { notes: ['F3'] }, { notes: ['F3'] }, { notes: ['E3'] },
//   { notes: ['G3'] }, { notes: ['F3'] }, { notes: ['F3'] }, { notes: ['E3'] },

//   { notes: ['G3'] },
//   { notes: ['C3'] },
//   { notes: ['C3'] },
//   { notes: ['B3'] },
//   { notes: ['A3'] },
//   { notes: ['B3'] },
//   { notes: ['C3'] },
//   { notes: ['G3'] },

//   { notes: ['G3'] },
//   { notes: ['G3'] },
//   { notes: ['C3'] },
//   { notes: ['C3'] },
//   { notes: ['C3'] },
//   { notes: ['B3'] },
//   { notes: ['A3'] },
//   { notes: ['B3'] },
//   { notes: ['C3'] },
//   { notes: ['G3'] },

//   { notes: ['G3'] },
//   { notes: ['G3'] },
//   { notes: ['C3'] },
//   { notes: ['C3'] },
//   { notes: ['C3'] },
//   { notes: ['B3'] },
//   { notes: ['A3'] },
//   { notes: ['B3'] },
//   { notes: ['C3'] },
//   { notes: ['G3'] },
//   { notes: ['G3'] },

//   { notes: ['G3'] },
//   { notes: ['F3'] },
//   { notes: ['E3'] },
//   { notes: ['D3'] },
//   { notes: ['C3'] }
// ]
