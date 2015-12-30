'use strict';

/**
 * @ngdoc service
 * @name keyIanoNewApp.KeyboardLayout
 * @description
 * # KeyboardLayout
 * Factory in the keyIanoNewApp.
 */
angular.module('keyIanoNewApp')
  .factory('KeyboardLayout', function () {

    // The order of these keys matter
    var layout = [
        {key: '`',      class: 'tilde'},
        {key: '1',      class: ''},
        {key: '2',      class: ''},
        {key: '3',      class: ''},
        {key: '4',      class: ''},
        {key: '5',      class: ''},
        {key: '6',      class: ''},
        {key: '7',      class: ''},
        {key: '8',      class: ''},
        {key: '9',      class: ''},
        {key: '0',      class: ''},
        {key: '-',      class: ''},
        {key: '=',      class: ''},
        {key: 'del',    class: 'del'},
        {key: 'tab',    class: 'tab'},
        {key: 'Q',      class: ''},
        {key: 'W',      class: 'flat'},
        {key: 'E',      class: ''},
        {key: 'R',      class: 'flat'},
        {key: 'T',      class: ''},
        {key: 'Y',      class: ''},
        {key: 'U',      class: ''},
        {key: 'I',      class: 'flat'},
        {key: 'O',      class: ''},
        {key: 'P',      class: 'flat'},
        {key: '[',      class: ''},
        {key: ']',      class: ''},
        {key: '\\',     class: ''},
        {key: 'caps',   class: 'caps'},
        {key: 'A',      class: ''},
        {key: 'S',      class: ''},
        {key: 'D',      class: ''},
        {key: 'F',      class: ''},
        {key: 'G',      class: ''},
        {key: 'H',      class: ''},
        {key: 'J',      class: ''},
        {key: 'K',      class: ''},
        {key: 'L',      class: ''},
        {key: ';',      class: ''},
        {key: '\'',     class: ''},
        {key: 'return', class: 'return'},
        {key: 'shift',  class: 'shift'},
        {key: 'Z',      class: ''},
        {key: 'X',      class: ''},
        {key: 'C',      class: ''},
        {key: 'V',      class: ''},
        {key: 'B',      class: ''},
        {key: 'N',      class: ''},
        {key: 'M',      class: ''},
        {key: ',',      class: ''},
        {key: '.',      class: ''},
        {key: '\/',     class: ''},
        {key: 'shift',  class: 'shift'},
        {key: 'ctrl',   class: 'ctrl'},
        {key: 'opt',    class: 'opt'},
        {key: 'Cmd',    class: 'left-cmd'},
        {key: 'space',  class: 'space'},
        {key: 'Cmd',    class: 'right-cmd'},
        {key: 'opt',    class: 'opt'},
        {key: 'ctrl',   class: 'ctrl'}
      ];

    return layout;
  });
