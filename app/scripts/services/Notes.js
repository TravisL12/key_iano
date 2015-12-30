'use strict';

/**
 * @ngdoc service
 * @name keyIanoNewApp.notes
 * @description
 * # notes
 * Factory in the keyIanoNewApp.
 */
 angular.module('keyIanoNewApp').factory('Notes', function () {

  // Build a reference Object for keydown events
  var keyCodeDict = {};

  var keyLibrary = [
    { note: '',     key: '`',      class:'tilde' ,  code: 192  },
    { note: 'E2',   key: '1',      class:''      ,  code: 49   },
    { note: 'F2',   key: '2',      class:''      ,  code: 50   },
    { note: 'Gb2',  key: '3',      class:''      ,  code: 51   },
    { note: 'G2',   key: '4',      class:''      ,  code: 52   },
    { note: 'Ab2',  key: '5',      class:''      ,  code: 53   },
    { note: 'A2',   key: '6',      class:''      ,  code: 54   },
    { note: 'Bb2',  key: '7',      class:''      ,  code: 55   },
    { note: 'B2',   key: '8',      class:''      ,  code: 56   },
    { note: 'C3',   key: '9',      class:''      ,  code: 57   },
    { note: 'Eb2',  key: '0',      class:''      ,  code: 48   },
    { note: '',     key: '-',      class:''      ,  code: 189  },
    { note: 'C8',   key: '=',      class:''      ,  code: 187  },
    { note: '',     key: 'del',    class:'del'   ,  code: 8    },
    { note: '',     key: 'tab',    class:'tab'   ,  code: 9    },
    { note: 'F4',   key: 'q',      class:''      ,  code: 81   },
    { note: 'B4',   key: 'w',      class:'flat'  ,  code: 87   },
    { note: 'F3',   key: 'e',      class:''      ,  code: 69   },
    { note: 'Gb4',  key: 'r',      class:'flat'  ,  code: 82   },
    { note: 'Ab4',  key: 't',      class:''      ,  code: 84   },
    { note: 'Db5',  key: 'y',      class:''      ,  code: 89   },
    { note: 'A4',   key: 'u',      class:'flat'  ,  code: 85   },
    { note: 'A3',   key: 'i',      class:''      ,  code: 73   },
    { note: 'Eb4',  key: 'o',      class:'flat'  ,  code: 79   },
    { note: 'E4',   key: 'p',      class:''      ,  code: 80   },
    { note: '',     key: '[',      class:''      ,  code: 219  },
    { note: '',     key: ']',      class:''      ,  code: 221  },
    { note: '',     key: '\\',     class:''      ,  code: 220  },
    { note: '',     key: 'caps',   class:'caps'  ,  code: 20   },
    { note: 'Db3',  key: 'a',      class:''      ,  code: 65   },
    { note: 'G4',   key: 's',      class:''      ,  code: 83   },
    { note: 'E3',   key: 'd',      class:''      ,  code: 68   },
    { note: 'Gb3',  key: 'f',      class:''      ,  code: 70   },
    { note: 'G3',   key: 'g',      class:''      ,  code: 71   },
    { note: 'Ab3',  key: 'h',      class:''      ,  code: 72   },
    { note: 'Bb3',  key: 'j',      class:''      ,  code: 74   },
    { note: 'B3',   key: 'k',      class:''      ,  code: 75   },
    { note: 'C4',   key: 'l',      class:''      ,  code: 76   },
    { note: 'B7',   key: ';',      class:''      ,  code: 186  },
    { note: '',     key: '\'',     class:''      ,  code: 222  },
    { note: '',     key: 'return', class:'return',  code: 13   },
    { note: '',     key: 'shift',  class:'shift' ,  code: 16   },
    { note: 'D5',   key: 'z',      class:''      ,  code: 90   },
    { note: 'C5',   key: 'x',      class:''      ,  code: 88   },
    { note: 'Eb3',  key: 'c',      class:''      ,  code: 67   },
    { note: 'Bb4',  key: 'v',      class:''      ,  code: 86   },
    { note: 'D3',   key: 'b',      class:''      ,  code: 66   },
    { note: 'Db4',  key: 'm',      class:''      ,  code: 77   },
    { note: 'D4',   key: 'n',      class:''      ,  code: 78   },
    { note: '',     key: ',',      class:''      ,  code: 188  },
    { note: '',     key: '/',      class:''      ,  code: 190  },
    { note: '',     key: '\/',     class:''      ,  code: 191  },
    { note: '',     key: 'shift',  class:'shift' ,  code: 16   },
    { note: '',     key: 'ctrl',   class:'ctrl'  ,  code: 17   },
    { note: '',     key: 'opt',    class:'opt'   ,  code: 18   },
    { note: '',     key: 'cmd' ,   class:'left-cmd',code: 91   },
    { note: '',     key: 'space',  class:'space' ,  code: 32   },
    { note: '',     key: 'cmd' ,   class:'right-cmd', code: 92 },
    { note: '',     key: 'opt',    class:'opt'   ,  code: 18   },
    { note: '',     key: 'ctrl',   class:'ctrl'  ,  code: 17   },
  ];

  for (var i in keyLibrary) {
    if (keyLibrary[i].note) {
      var a = new window.Howl({
        urls: ['sound/' + keyLibrary[i].note + '.mp3']
      });
      keyLibrary[i].sound = a;
      keyCodeDict[keyLibrary[i].code] = i;
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
