'use strict';

/**
 * @ngdoc service
 * @name keyIanoNewApp.notes
 * @description
 * # notes
 * Factory in the keyIanoNewApp.
 */
 angular.module('keyIanoNewApp').factory('Notes', function ($rootScope) {

  // Build a reference Object for keydown events
  var keyCodeDict = {};

  var keyLibrary = [
  { note: '',     key: '`',      style:'tilde' ,  keyCode: 192  },
  { note: '',     key: '1',      style:''      ,  keyCode: 49   },
  { note: '',     key: '2',      style:''      ,  keyCode: 50   },
  { note: '',     key: '3',      style:''      ,  keyCode: 51   },
  { note: '',     key: '4',      style:''      ,  keyCode: 52   },
  { note: '',     key: '5',      style:''      ,  keyCode: 53   },
  { note: '',     key: '6',      style:''      ,  keyCode: 54   },
  { note: 'Db3',  key: '7',      style:''      ,  keyCode: 55   },
  { note: 'Eb3',  key: '8',      style:''      ,  keyCode: 56   },
  { note: '',     key: '9',      style:''      ,  keyCode: 57   },
  { note: 'Gb3',  key: '0',      style:''      ,  keyCode: 48   },
  { note: 'Ab3',  key: '-',      style:''      ,  keyCode: 189  },
  { note: 'Bb3',  key: '=',      style:''      ,  keyCode: 187  },
  { note: '',     key: 'del',    style:'del'   ,  keyCode: 8    },
  { note: '',     key: 'tab',    style:'tab'   ,  keyCode: 9    },
  { note: '',     key: 'q',      style:''      ,  keyCode: 81   },
  { note: '',     key: 'w',      style:''      ,  keyCode: 87   },
  { note: '',     key: 'e',      style:''      ,  keyCode: 69   },
  { note: '',     key: 'r',      style:''      ,  keyCode: 82   },
  { note: '',     key: 't',      style:''      ,  keyCode: 84   },
  { note: 'C3',   key: 'y',      style:''      ,  keyCode: 89   },
  { note: 'D3',   key: 'u',      style:''      ,  keyCode: 85   },
  { note: 'E3',   key: 'i',      style:''      ,  keyCode: 73   },
  { note: 'F3',   key: 'o',      style:''      ,  keyCode: 79   },
  { note: 'G3',   key: 'p',      style:''      ,  keyCode: 80   },
  { note: 'A3',   key: '[',      style:''      ,  keyCode: 219  },
  { note: 'B3',   key: ']',      style:''      ,  keyCode: 221  },
  { note: 'C4',   key: '\\',     style:''      ,  keyCode: 220  },
  { note: '',     key: 'caps',   style:'caps'  ,  keyCode: 20   },
  { note: '',     key: 'a',      style:''      ,  keyCode: 65   },
  { note: 'Db2',  key: 's',      style:''      ,  keyCode: 83   },
  { note: 'Eb2',  key: 'd',      style:''      ,  keyCode: 68   },
  { note: '',     key: 'f',      style:''      ,  keyCode: 70   },
  { note: 'Gb2',  key: 'g',      style:''      ,  keyCode: 71   },
  { note: 'Ab2',  key: 'h',      style:''      ,  keyCode: 72   },
  { note: 'Bb2',  key: 'j',      style:''      ,  keyCode: 74   },
  { note: '',     key: 'k',      style:''      ,  keyCode: 75   },
  { note: '',     key: 'l',      style:''      ,  keyCode: 76   },
  { note: '',     key: ';',      style:''      ,  keyCode: 186  },
  { note: '',     key: '\'',     style:''      ,  keyCode: 222  },
  { note: '',     key: 'return', style:'return',  keyCode: 13   },
  { note: '',     key: 'shift',  style:'shift' ,  keyCode: 16   },
  { note: 'C2',   key: 'z',      style:''      ,  keyCode: 90   },
  { note: 'D2',   key: 'x',      style:''      ,  keyCode: 88   },
  { note: 'E2',   key: 'c',      style:''      ,  keyCode: 67   },
  { note: 'F2',   key: 'v',      style:''      ,  keyCode: 86   },
  { note: 'G2',   key: 'b',      style:''      ,  keyCode: 66   },
  { note: 'A2',   key: 'n',      style:''      ,  keyCode: 78   },
  { note: 'B2',   key: 'm',      style:''      ,  keyCode: 77   },
  { note: 'C3',   key: ',',      style:''      ,  keyCode: 188  },
  { note: '',     key: '.',      style:''      ,  keyCode: 190  },
  { note: '',     key: '/',      style:''      ,  keyCode: 191  },
  { note: '',     key: 'shift',  style:'shift' ,  keyCode: 16   },
  { note: '',     key: 'ctrl',   style:'ctrl'  ,  keyCode: 17   },
  { note: '',     key: 'opt',    style:'opt'   ,  keyCode: 18   },
  { note: '',     key: 'cmd' ,   style:'left-cmd',keyCode: 91   },
  { note: '',     key: 'space',  style:'space' ,  keyCode: 32   },
  { note: '',     key: 'cmd' ,   style:'right-cmd', keyCode: 93 },
  { note: '',     key: 'opt',    style:'opt'   ,  keyCode: 18   },
  { note: '',     key: 'ctrl',   style:'ctrl'  ,  keyCode: 17   },
  ];

  var endCallback = function() {
    $rootScope.$broadcast('removeActiveNote');
  };

  for (var i in keyLibrary) {
    if (keyLibrary[i].note) {
      var a = new window.Howl({
        urls: ['sound/completed/' + keyLibrary[i].note + '.mp3'],
        onend: endCallback
      });
      keyLibrary[i].sound = a;
      keyCodeDict[keyLibrary[i].keyCode] = i;
    }
  }

  return {
    keys: function() {
      return keyLibrary;
    },

    codeLookup: function(code) {
      var index = keyCodeDict[code];
      return keyLibrary[index];
    }
  };

});


// Unused keys
// { note: 'Db1',  key: 'pause/break', class:''      ,  code: 19,  order: 55 },
// { note: 'Eb1',  key: 'escape',      class:''      ,  code: 27,  order: 56 },
// { note: 'F1',   key: 'page up',     class:''      ,  code: 33,  order: 58 },
// { note: 'Gb1',  key: 'page down',   class:''      ,  code: 34,  order: 59 },
// { note: 'G1',   key: 'end',         class:''      ,  code: 35,  order: 60 },
// { note: 'Ab1',  key: 'home',        class:''      ,  code: 36,  order: 61 },
// { note: 'A1',   key: 'left arrow',  class:''      ,  code: 37,  order: 62 },
// { note: 'Bb1',  key: 'up arrow',    class:''      ,  code: 38,  order: 63 },
// { note: 'B1',   key: 'right arrow', class:''      ,  code: 39,  order: 64 },
// { note: 'C2',   key: 'down arrow',  class:''      ,  code: 40,  order: 65 },
// { note: 'Db2',  key: 'insert',      class:''      ,  code: 45,  order: 66 },
// { note: 'D2',   key: 'delete',      class:''      ,  code: 46,  order: 67 }
// 91:  { note: 'Eb5',  key: 'left-cmd' ,   class:'left-cmd' },  
// 92:  { note: 'E5',   key: 'right-cmd',   class:'right-cmd'},
// 93:  { note: 'F5',   key: 'right-cmd',   class:'right-cmd'},

// 96:  { note: 'Gb5',  key: 'numpad 0',    class:''       },
// 97:  { note: 'G5',   key: 'numpad 1',    class:''       },
// 98:  { note: 'Ab5',  key: 'numpad 2',    class:''       },
// 99:  { note: 'A5',   key: 'numpad 3',    class:''       },
// 100: { note: 'Bb5',  key: 'numpad 4',    class:''       },
// 101: { note: 'B5',   key: 'numpad 5',    class:''       },
// 102: { note: 'C6',   key: 'numpad 6',    class:''       },
// 103: { note: 'Db6',  key: 'numpad 7',    class:''       },
// 104: { note: 'D6',   key: 'numpad 8',    class:''       },
// 105: { note: 'Eb6',  key: 'numpad 9',    class:''       },

// 106: { note: 'E6',   key: 'multiply',      class:''     },
// 107: { note: 'F6',   key: 'add',           class:''     },
// 109: { note: 'Gb6',  key: 'subtract',      class:''     },
// 110: { note: 'G6',   key: 'decimal point', class:''     },
// 111: { note: 'Ab6',  key: 'divide',        class:''     },

// 112: { note: 'A6',   key: 'f1',            class:''     },
// 113: { note: 'Bb6',  key: 'f2',            class:''     },
// 114: { note: 'B6',   key: 'f3',            class:''     },
// 115: { note: 'C7',   key: 'f4',            class:''     },
// 116: { note: 'Db7',  key: 'f5',            class:''     },
// 117: { note: 'D7',   key: 'f6',            class:''     },
// 118: { note: 'Eb7',  key: 'f7',            class:''     },
// 119: { note: 'E7',   key: 'f8',            class:''     },
// 120: { note: 'F7',   key: 'f9',            class:''     },
// 121: { note: 'Gb7',  key: 'f10',           class:''     },
// 122: { note: 'G7',   key: 'f11',           class:''     },
// 123: { note: 'Ab7',  key: 'f12',           class:''     },

// 144: { note: 'A7',   key: 'num lock',      class:''     },
// 145: { note: 'Bb7',  key: 'scroll lock',   class:''     },
