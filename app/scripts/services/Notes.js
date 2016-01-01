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
    { note: '',    key: '`',      cssClass:'tilde' ,  keyCode: 192  },
    { note: '3C',  key: '1',      cssClass:''      ,  keyCode: 49   },
    { note: '3Db', key: '2',      cssClass:''      ,  keyCode: 50   },
    { note: '3D',  key: '3',      cssClass:''      ,  keyCode: 51   },
    { note: '3Eb', key: '4',      cssClass:''      ,  keyCode: 52   },
    { note: '3E',  key: '5',      cssClass:''      ,  keyCode: 53   },
    { note: '3F',  key: '6',      cssClass:''      ,  keyCode: 54   },
    { note: '3Gb', key: '7',      cssClass:''      ,  keyCode: 55   },
    { note: '3G',  key: '8',      cssClass:''      ,  keyCode: 56   },
    { note: '3Ab', key: '9',      cssClass:''      ,  keyCode: 57   },
    { note: '3A',  key: '0',      cssClass:''      ,  keyCode: 48   },
    { note: '3Bb', key: '-',      cssClass:''      ,  keyCode: 189  },
    { note: '3B',  key: '=',      cssClass:''      ,  keyCode: 187  },
    { note: '',    key: 'del',    cssClass:'del'   ,  keyCode: 8    },
    { note: '',    key: 'tab',    cssClass:'tab'   ,  keyCode: 9    },
    { note: '4C',  key: 'q',      cssClass:''      ,  keyCode: 81   },
    { note: '4Db', key: 'w',      cssClass:''      ,  keyCode: 87   },
    { note: '4D',  key: 'e',      cssClass:''      ,  keyCode: 69   },
    { note: '4Eb', key: 'r',      cssClass:''      ,  keyCode: 82   },
    { note: '4E',  key: 't',      cssClass:''      ,  keyCode: 84   },
    { note: '4F',  key: 'y',      cssClass:''      ,  keyCode: 89   },
    { note: '4Gb', key: 'u',      cssClass:''      ,  keyCode: 85   },
    { note: '4G',  key: 'i',      cssClass:''      ,  keyCode: 73   },
    { note: '4Ab', key: 'o',      cssClass:''      ,  keyCode: 79   },
    { note: '4A',  key: 'p',      cssClass:''      ,  keyCode: 80   },
    { note: '4Bb', key: '[',      cssClass:''      ,  keyCode: 219  },
    { note: '4B',  key: ']',      cssClass:''      ,  keyCode: 221  },
    { note: '',    key: '\\',     cssClass:''      ,  keyCode: 220  },
    { note: '',    key: 'caps',   cssClass:'caps'  ,  keyCode: 20   },
    { note: '5C',  key: 'a',      cssClass:''      ,  keyCode: 65   },
    { note: '5Db', key: 's',      cssClass:''      ,  keyCode: 83   },
    { note: '5D',  key: 'd',      cssClass:''      ,  keyCode: 68   },
    { note: '5Eb', key: 'f',      cssClass:''      ,  keyCode: 70   },
    { note: '5E',  key: 'g',      cssClass:''      ,  keyCode: 71   },
    { note: '5F',  key: 'h',      cssClass:''      ,  keyCode: 72   },
    { note: '5Gb', key: 'j',      cssClass:''      ,  keyCode: 74   },
    { note: '5G',  key: 'k',      cssClass:''      ,  keyCode: 75   },
    { note: '5Ab', key: 'l',      cssClass:''      ,  keyCode: 76   },
    { note: '5A',  key: ';',      cssClass:''      ,  keyCode: 186  },
    { note: '5Bb', key: '\'',     cssClass:''      ,  keyCode: 222  },
    { note: '5B',  key: 'return', cssClass:'return',  keyCode: 13   },
    { note: '',    key: 'shift',  cssClass:'shift' ,  keyCode: 16   },
    { note: '6C',  key: 'z',      cssClass:''      ,  keyCode: 90   },
    { note: '6Db', key: 'x',      cssClass:''      ,  keyCode: 88   },
    { note: '6D',  key: 'c',      cssClass:''      ,  keyCode: 67   },
    { note: '6Eb', key: 'v',      cssClass:''      ,  keyCode: 86   },
    { note: '6E',  key: 'b',      cssClass:''      ,  keyCode: 66   },
    { note: '6F',  key: 'n',      cssClass:''      ,  keyCode: 78   },
    { note: '6Gb', key: 'm',      cssClass:''      ,  keyCode: 77   },
    { note: '6G',  key: ',',      cssClass:''      ,  keyCode: 188  },
    { note: '6Ab', key: '.',      cssClass:''      ,  keyCode: 190  },
    { note: '6A',  key: '/',      cssClass:''      ,  keyCode: 191  },
    { note: '',    key: 'shift',  cssClass:'shift' ,  keyCode: 16   },
    { note: '',    key: 'ctrl',   cssClass:'ctrl'  ,  keyCode: 17   },
    { note: '',    key: 'opt',    cssClass:'opt'   ,  keyCode: 18   },
    { note: '',    key: 'cmd' ,   cssClass:'left-cmd',keyCode: 91   },
    { note: '6Bb', key: 'space',  cssClass:'space' ,  keyCode: 32   },
    { note: '6B',  key: 'cmd' ,   cssClass:'right-cmd', keyCode: 93 },
    { note: '7C',  key: 'opt',    cssClass:'opt'   ,  keyCode: 18   },
    { note: '',    key: 'ctrl',   cssClass:'ctrl'  ,  keyCode: 17   }
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
