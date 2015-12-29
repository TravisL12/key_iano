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

    var layout = {
      top: [
        {key: '`',   class: 'tilde'},
        {key: '1',   class: ''},
        {key: '2',   class: ''},
        {key: '3',   class: ''},
        {key: '4',   class: ''},
        {key: '5',   class: ''},
        {key: '6',   class: ''},
        {key: '7',   class: ''},
        {key: '8',   class: ''},
        {key: '9',   class: ''},
        {key: '0',   class: ''},
        {key: '-',   class: ''},
        {key: '=',   class: ''},
        {key: 'del', class: 'del'}
      ],
      upper: [
        {key: 'tab', class: 'tab'},
        {key: 'q',   class: ''},
        {key: 'w',   class: ''},
        {key: 'e',   class: ''},
        {key: 'r',   class: ''},
        {key: 't',   class: ''},
        {key: 'y',   class: ''},
        {key: 'u',   class: ''},
        {key: 'i',   class: ''},
        {key: 'o',   class: ''},
        {key: 'p',   class: ''},
        {key: '[',   class: ''},
        {key: ']',   class: ''},
        {key: '\\',  class: ''}
      ],
      middle: [
        {key: 'caps',   class: 'caps'},
        {key: 'a',      class: ''},
        {key: 's',      class: ''},
        {key: 'd',      class: ''},
        {key: 'f',      class: ''},
        {key: 'g',      class: ''},
        {key: 'h',      class: ''},
        {key: 'j',      class: ''},
        {key: 'k',      class: ''},
        {key: 'l',      class: ''},
        {key: ';',      class: ''},
        {key: '\'',     class: ''},
        {key: 'return', class: 'return'}
      ],
      lower: [
        {key:'shift', class:'shift'},
        {key:'z',     class:''},
        {key:'x',     class:''},
        {key:'c',     class:''},
        {key:'v',     class:''},
        {key:'b',     class:''},
        {key:'n',     class:''},
        {key:'m',     class:''},
        {key:',',     class:''},
        {key:'.',     class:''},
        {key:'\/',    class:''},
        {key:'shift', class:'shift'}
      ],
      bottom: [
        {key: 'ctrl',  class: 'ctrl'},
        {key: 'opt',   class: 'opt'},
        {key: 'Cmd',   class: 'left-cmd'},
        {key: 'space', class: 'space'},
        {key: 'Cmd',   class: 'right-cmd'},
        {key: 'opt',   class: 'opt'},
        {key: 'ctrl',  class: 'ctrl'}
      ]
    };

    return layout;
  });
