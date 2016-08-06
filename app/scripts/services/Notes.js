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
    { note: '',    key: '`',      cssId: '',    cssClass:'tilde' ,  keyCode: 192  },
    { note: '3C',  key: '1',      cssId: 'C3',  cssClass:''      ,  keyCode: 49   },
    { note: '3Db', key: '2',      cssId: 'Db3', cssClass:''      ,  keyCode: 50   },
    { note: '3D',  key: '3',      cssId: 'D3',  cssClass:''      ,  keyCode: 51   },
    { note: '3Eb', key: '4',      cssId: 'Eb3', cssClass:''      ,  keyCode: 52   },
    { note: '3E',  key: '5',      cssId: 'E3',  cssClass:''      ,  keyCode: 53   },
    { note: '3F',  key: '6',      cssId: 'F3',  cssClass:''      ,  keyCode: 54   },
    { note: '3Gb', key: '7',      cssId: 'Gb3', cssClass:''      ,  keyCode: 55   },
    { note: '3G',  key: '8',      cssId: 'G3',  cssClass:''      ,  keyCode: 56   },
    { note: '3Ab', key: '9',      cssId: 'Ab3', cssClass:''      ,  keyCode: 57   },
    { note: '3A',  key: '0',      cssId: 'A3',  cssClass:''      ,  keyCode: 48   },
    { note: '3Bb', key: '-',      cssId: 'Bb3', cssClass:''      ,  keyCode: 189  },
    { note: '3B',  key: '=',      cssId: 'B3',  cssClass:''      ,  keyCode: 187  },
    { note: '',    key: 'del',    cssId: '',    cssClass:'del'   ,  keyCode: 8    },
    { note: '',    key: 'tab',    cssId: '',    cssClass:'tab'   ,  keyCode: 9    },
    { note: '4C',  key: 'q',      cssId: 'C4',  cssClass:''      ,  keyCode: 81   },
    { note: '4Db', key: 'w',      cssId: 'Db4', cssClass:''      ,  keyCode: 87   },
    { note: '4D',  key: 'e',      cssId: 'D4',  cssClass:''      ,  keyCode: 69   },
    { note: '4Eb', key: 'r',      cssId: 'Eb4', cssClass:''      ,  keyCode: 82   },
    { note: '4E',  key: 't',      cssId: 'E4',  cssClass:''      ,  keyCode: 84   },
    { note: '4F',  key: 'y',      cssId: 'F4',  cssClass:''      ,  keyCode: 89   },
    { note: '4Gb', key: 'u',      cssId: 'Gb4', cssClass:''      ,  keyCode: 85   },
    { note: '4G',  key: 'i',      cssId: 'G4',  cssClass:''      ,  keyCode: 73   },
    { note: '4Ab', key: 'o',      cssId: 'Ab4', cssClass:''      ,  keyCode: 79   },
    { note: '4A',  key: 'p',      cssId: 'A4',  cssClass:''      ,  keyCode: 80   },
    { note: '4Bb', key: '[',      cssId: 'Bb4', cssClass:''      ,  keyCode: 219  },
    { note: '4B',  key: ']',      cssId: 'B4',  cssClass:''      ,  keyCode: 221  },
    { note: '',    key: '\\',     cssId: '',    cssClass:''      ,  keyCode: 220  },
    { note: '',    key: 'caps',   cssId: '',    cssClass:'caps'  ,  keyCode: 20   },
    { note: '5C',  key: 'a',      cssId: 'C5',  cssClass:''      ,  keyCode: 65   },
    { note: '5Db', key: 's',      cssId: 'Db5', cssClass:''      ,  keyCode: 83   },
    { note: '5D',  key: 'd',      cssId: 'D5',  cssClass:''      ,  keyCode: 68   },
    { note: '5Eb', key: 'f',      cssId: 'Eb5', cssClass:''      ,  keyCode: 70   },
    { note: '5E',  key: 'g',      cssId: 'E5',  cssClass:''      ,  keyCode: 71   },
    { note: '5F',  key: 'h',      cssId: 'F5',  cssClass:''      ,  keyCode: 72   },
    { note: '5Gb', key: 'j',      cssId: 'Gb5', cssClass:''      ,  keyCode: 74   },
    { note: '5G',  key: 'k',      cssId: 'G5',  cssClass:''      ,  keyCode: 75   },
    { note: '5Ab', key: 'l',      cssId: 'Ab5', cssClass:''      ,  keyCode: 76   },
    { note: '5A',  key: ';',      cssId: 'A5',  cssClass:''      ,  keyCode: 186  },
    { note: '5Bb', key: '\'',     cssId: 'Bb5', cssClass:''      ,  keyCode: 222  },
    { note: '5B',  key: 'return', cssId: 'B5',  cssClass:'return',  keyCode: 13   },
    { note: '',    key: 'shift',  cssId: '',    cssClass:'shift' ,  keyCode: 16   },
    { note: '6C',  key: 'z',      cssId: 'C6',  cssClass:''      ,  keyCode: 90   },
    { note: '6Db', key: 'x',      cssId: 'Db6', cssClass:''      ,  keyCode: 88   },
    { note: '6D',  key: 'c',      cssId: 'D6',  cssClass:''      ,  keyCode: 67   },
    { note: '6Eb', key: 'v',      cssId: 'Eb6', cssClass:''      ,  keyCode: 86   },
    { note: '6E',  key: 'b',      cssId: 'E6',  cssClass:''      ,  keyCode: 66   },
    { note: '6F',  key: 'n',      cssId: 'F6',  cssClass:''      ,  keyCode: 78   },
    { note: '6Gb', key: 'm',      cssId: 'Gb6', cssClass:''      ,  keyCode: 77   },
    { note: '6G',  key: ',',      cssId: 'G6',  cssClass:''      ,  keyCode: 188  },
    { note: '6Ab', key: '.',      cssId: 'Ab6', cssClass:''      ,  keyCode: 190  },
    { note: '6A',  key: '/',      cssId: 'A6',  cssClass:''      ,  keyCode: 191  },
    { note: '',    key: 'shift',  cssId: '',    cssClass:'shift' ,  keyCode: 16   },
    { note: '',    key: 'ctrl',   cssId: '',    cssClass:'ctrl'  ,  keyCode: 17   },
    { note: '',    key: 'opt',    cssId: '',    cssClass:'opt'   ,  keyCode: 18   },
    { note: '',    key: 'cmd' ,   cssId: '',    cssClass:'left-cmd',keyCode: 91   },
    { note: '6Bb', key: 'space',  cssId: 'Bb6', cssClass:'space' ,  keyCode: 32   },
    { note: '6B',  key: 'cmd' ,   cssId: 'B6',  cssClass:'right-cmd', keyCode: 93 },
    { note: '7C',  key: 'opt',    cssId: 'C7',  cssClass:'opt'   ,  keyCode: 18   },
    { note: '',    key: 'ctrl',   cssId: '',    cssClass:'ctrl'  ,  keyCode: 17   }
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

  var removeNote = function() {
    $rootScope.$broadcast('removeActiveNote');
  };
  // Build sound library independant of keyboard letter
  var soundDict = {};
  for (var j in notes) {
    soundDict[notes[j]] = new window.Howl({
      urls: ['sound/' + notes[j] + '.mp3'],
      onend: removeNote
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
