'use strict';

/**
 * @ngdoc service
 * @name keyIanoNewApp.notes
 * @description
 * # notes
 * Factory in the keyIanoNewApp.
 */
 angular.module('keyIanoNewApp').factory('Notes', function ($rootScope) {

  var keyLibrary = [
    { note: '',    noteId: '',    key: '`',      cssClass:'tilde' ,  keyCode: 192  },
    { note: '3C',  noteId: 'C3',  key: '1',      cssClass:''      ,  keyCode: 49   },
    { note: '3Db', noteId: 'Db3', key: '2',      cssClass:''      ,  keyCode: 50   },
    { note: '3D',  noteId: 'D3',  key: '3',      cssClass:''      ,  keyCode: 51   },
    { note: '3Eb', noteId: 'Eb3', key: '4',      cssClass:''      ,  keyCode: 52   },
    { note: '3E',  noteId: 'E3',  key: '5',      cssClass:''      ,  keyCode: 53   },
    { note: '3F',  noteId: 'F3',  key: '6',      cssClass:''      ,  keyCode: 54   },
    { note: '3Gb', noteId: 'Gb3', key: '7',      cssClass:''      ,  keyCode: 55   },
    { note: '3G',  noteId: 'G3',  key: '8',      cssClass:''      ,  keyCode: 56   },
    { note: '3Ab', noteId: 'Ab3', key: '9',      cssClass:''      ,  keyCode: 57   },
    { note: '3A',  noteId: 'A3',  key: '0',      cssClass:''      ,  keyCode: 48   },
    { note: '3Bb', noteId: 'Bb3', key: '-',      cssClass:''      ,  keyCode: 189  },
    { note: '3B',  noteId: 'B3',  key: '=',      cssClass:''      ,  keyCode: 187  },
    { note: '',    noteId: '',    key: 'del',    cssClass:'del'   ,  keyCode: 8    },
    { note: '',    noteId: '',    key: 'tab',    cssClass:'tab'   ,  keyCode: 9    },
    { note: '4C',  noteId: 'C4',  key: 'q',      cssClass:''      ,  keyCode: 81   },
    { note: '4Db', noteId: 'Db4', key: 'w',      cssClass:''      ,  keyCode: 87   },
    { note: '4D',  noteId: 'D4',  key: 'e',      cssClass:''      ,  keyCode: 69   },
    { note: '4Eb', noteId: 'Eb4', key: 'r',      cssClass:''      ,  keyCode: 82   },
    { note: '4E',  noteId: 'E4',  key: 't',      cssClass:''      ,  keyCode: 84   },
    { note: '4F',  noteId: 'F4',  key: 'y',      cssClass:''      ,  keyCode: 89   },
    { note: '4Gb', noteId: 'Gb4', key: 'u',      cssClass:''      ,  keyCode: 85   },
    { note: '4G',  noteId: 'G4',  key: 'i',      cssClass:''      ,  keyCode: 73   },
    { note: '4Ab', noteId: 'Ab4', key: 'o',      cssClass:''      ,  keyCode: 79   },
    { note: '4A',  noteId: 'A4',  key: 'p',      cssClass:''      ,  keyCode: 80   },
    { note: '4Bb', noteId: 'Bb4', key: '[',      cssClass:''      ,  keyCode: 219  },
    { note: '4B',  noteId: 'B4',  key: ']',      cssClass:''      ,  keyCode: 221  },
    { note: '',    noteId: '',    key: '\\',     cssClass:''      ,  keyCode: 220  },
    { note: '',    noteId: '',    key: 'caps',   cssClass:'caps'  ,  keyCode: 20   },
    { note: '5C',  noteId: 'C5',  key: 'a',      cssClass:''      ,  keyCode: 65   },
    { note: '5Db', noteId: 'Db5', key: 's',      cssClass:''      ,  keyCode: 83   },
    { note: '5D',  noteId: 'D5',  key: 'd',      cssClass:''      ,  keyCode: 68   },
    { note: '5Eb', noteId: 'Eb5', key: 'f',      cssClass:''      ,  keyCode: 70   },
    { note: '5E',  noteId: 'E5',  key: 'g',      cssClass:''      ,  keyCode: 71   },
    { note: '5F',  noteId: 'F5',  key: 'h',      cssClass:''      ,  keyCode: 72   },
    { note: '5Gb', noteId: 'Gb5', key: 'j',      cssClass:''      ,  keyCode: 74   },
    { note: '5G',  noteId: 'G5',  key: 'k',      cssClass:''      ,  keyCode: 75   },
    { note: '5Ab', noteId: 'Ab5', key: 'l',      cssClass:''      ,  keyCode: 76   },
    { note: '5A',  noteId: 'A5',  key: ';',      cssClass:''      ,  keyCode: 186  },
    { note: '5Bb', noteId: 'Bb5', key: '\'',     cssClass:''      ,  keyCode: 222  },
    { note: '5B',  noteId: 'B5',  key: 'return', cssClass:'return',  keyCode: 13   },
    { note: '',    noteId: '',    key: 'shift',  cssClass:'shift' ,  keyCode: 16   },
    { note: '6C',  noteId: 'C6',  key: 'z',      cssClass:''      ,  keyCode: 90   },
    { note: '6Db', noteId: 'Db6', key: 'x',      cssClass:''      ,  keyCode: 88   },
    { note: '6D',  noteId: 'D6',  key: 'c',      cssClass:''      ,  keyCode: 67   },
    { note: '6Eb', noteId: 'Eb6', key: 'v',      cssClass:''      ,  keyCode: 86   },
    { note: '6E',  noteId: 'E6',  key: 'b',      cssClass:''      ,  keyCode: 66   },
    { note: '6F',  noteId: 'F6',  key: 'n',      cssClass:''      ,  keyCode: 78   },
    { note: '6Gb', noteId: 'Gb6', key: 'm',      cssClass:''      ,  keyCode: 77   },
    { note: '6G',  noteId: 'G6',  key: ',',      cssClass:''      ,  keyCode: 188  },
    { note: '6Ab', noteId: 'Ab6', key: '.',      cssClass:''      ,  keyCode: 190  },
    { note: '6A',  noteId: 'A6',  key: '/',      cssClass:''      ,  keyCode: 191  },
    { note: '',    noteId: '',    key: 'shift',  cssClass:'shift' ,  keyCode: 16   },
    { note: '',    noteId: '',    key: 'ctrl',   cssClass:'ctrl'  ,  keyCode: 17   },
    { note: '',    noteId: '',    key: 'opt',    cssClass:'opt'   ,  keyCode: 18   },
    { note: '',    noteId: '',    key: 'cmd' ,   cssClass:'left-cmd',keyCode: 91   },
    { note: '6Bb', noteId: 'Bb6', key: 'space',  cssClass:'space' ,  keyCode: 32   },
    { note: '6B',  noteId: 'B6',  key: 'cmd' ,   cssClass:'right-cmd', keyCode: 93 },
    { note: '7C',  noteId: 'C7',  key: 'opt',    cssClass:'opt'   ,  keyCode: 18   },
    { note: '',    noteId: '',    key: 'ctrl',   cssClass:'ctrl'  ,  keyCode: 17   }
  ];


  // Build a reference Object for keydown events
  var keyCodeDict = {};
  for (var i in keyLibrary) {
    keyCodeDict[keyLibrary[i].keyCode] = i;
  }

  // NOTE FILE NAMES (missing a few)
  var notes = [                                      '0A','0Bb','0B',
    '1C',      '1D','1Eb','1E','1F',           '1Ab','1A','1Bb','1B',
    '2C',           '2Eb','2E','2F','2Gb','2G','2Ab','2A','2Bb','2B',
    '3C','3Db','3D','3Eb','3E','3F','3Gb','3G','3Ab','3A','3Bb','3B',
    '4C','4Db','4D','4Eb','4E','4F','4Gb','4G','4Ab','4A','4Bb','4B',
    '5C','5Db','5D','5Eb','5E','5F','5Gb','5G','5Ab','5A','5Bb','5B',
    '6C','6Db','6D','6Eb','6E','6F','6Gb','6G','6Ab','6A','6Bb','6B',
    '7C','7Db','7D','7Eb',     '7F','7Gb','7G','7Ab','7A','7Bb','7B',
    '8C'
  ];

  var endCallback = function() {
    $rootScope.$broadcast('removeActiveNote');
  };
  // Build sound library independant of keyboard letter
  var soundDict = {};
  for (var j in notes) {
    soundDict[notes[j]] = new window.Howl({
      urls: ['sound/' + notes[j] + '.mp3'],
      onend: endCallback
    });
  }

  return {
    notes: function() {
      return notes;
    },

    keys: function() {
      return keyLibrary;
    },

    keyCodeLookup: function(code) {
      var index = keyCodeDict[code];
      var key   = keyLibrary[index];
      if (key) {
        key.sound = soundDict[key.note];
      }
      return key;
    }
  };

});
