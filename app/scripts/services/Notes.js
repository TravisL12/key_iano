'use strict';

 angular.module('keyIanoNewApp').factory('Notes', function ($rootScope, KeyCodes) {

  var keyLibrary = [
    { note: '',    key: '`'         },
    { note: '3C',  key: '1'         },
    { note: '3Db', key: '2'         },
    { note: '3D',  key: '3'         },
    { note: '3Eb', key: '4'         },
    { note: '3E',  key: '5'         },
    { note: '3F',  key: '6'         },
    { note: '3Gb', key: '7'         },
    { note: '3G',  key: '8'         },
    { note: '3Ab', key: '9'         },
    { note: '3A',  key: '0'         },
    { note: '3Bb', key: '-'         },
    { note: '3B',  key: '='         },
    { note: '',    key: 'del'       },
    { note: '',    key: 'tab'       },
    { note: '4C',  key: 'q'         },
    { note: '4Db', key: 'w'         },
    { note: '4D',  key: 'e'         },
    { note: '4Eb', key: 'r'         },
    { note: '4E',  key: 't'         },
    { note: '4F',  key: 'y'         },
    { note: '4Gb', key: 'u'         },
    { note: '4G',  key: 'i'         },
    { note: '4Ab', key: 'o'         },
    { note: '4A',  key: 'p'         },
    { note: '4Bb', key: '['         },
    { note: '4B',  key: ']'         },
    { note: '',    key: '\\'        },
    { note: '',    key: 'caps'      },
    { note: '5C',  key: 'a'         },
    { note: '5Db', key: 's'         },
    { note: '5D',  key: 'd'         },
    { note: '5Eb', key: 'f'         },
    { note: '5E',  key: 'g'         },
    { note: '5F',  key: 'h'         },
    { note: '5Gb', key: 'j'         },
    { note: '5G',  key: 'k'         },
    { note: '5Ab', key: 'l'         },
    { note: '5A',  key: ';'         },
    { note: '5Bb', key: '\''        },
    { note: '5B',  key: 'return'    },
    { note: '',    key: 'shift'     },
    { note: '6C',  key: 'z'         },
    { note: '6Db', key: 'x'         },
    { note: '6D',  key: 'c'         },
    { note: '6Eb', key: 'v'         },
    { note: '6E',  key: 'b'         },
    { note: '6F',  key: 'n'         },
    { note: '6Gb', key: 'm'         },
    { note: '6G',  key: ','         },
    { note: '6Ab', key: '.'         },
    { note: '6A',  key: '/'         },
    { note: '',    key: 'shift'     },
    { note: '',    key: 'ctrl'      },
    { note: '',    key: 'opt'       },
    { note: '',    key: 'left-cmd'  },
    { note: '6Bb', key: 'space'     },
    { note: '6B',  key: 'right-cmd' },
    { note: '7C',  key: 'opt'       },
    { note: '',    key: 'ctrl'      }
  ];


  // Build a reference Object for keydown events
  var keyCodeDict = {};
  for (var i in keyLibrary) {
    var libraryObj = keyLibrary[i];

    // Set keycodes from service
    libraryObj.keyCode = KeyCodes[libraryObj.key];

    // Set CSS ID. Need to change name since ID's cannot start with a number
    libraryObj.cssId   = libraryObj.note.replace(/(^\d)(.*)/,'$2$1');
    keyCodeDict[libraryObj.keyCode] = i;
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
    get notes () {
      return notes;
    },

    get keys () {
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
