'use strict';

 angular.module('keyIanoNewApp').factory('Notes', function ($rootScope, KeyCodes) {

  var keyLibrary = [
    { note: '',  key: '`'         },
    { note: '',  key: '1'         },
    { note: '',  key: '2'         },
    { note: '',  key: '3'         },
    { note: '',  key: '4'         },
    { note: '',  key: '5'         },
    { note: '',  key: '6'         },

    { note: '',  key: '7'         },
    { note: '',  key: '8'         },
    { note: '',  key: '9'         },
    { note: '',  key: '0'         },
    { note: '',  key: '-'         },
    { note: '',  key: '='         },
    { note: '',  key: 'del'       },

    { note: '',     key: 'tab'       },
    { note: '2C',   key: 'q'         },
    { note: '1D',   key: 'w'         },
    { note: '2Eb',  key: 'e'         },
    { note: '2Gb',  key: 'r'         },
    { note: '2Ab',  key: 't'         },
    { note: '2Bb',  key: 'y'         },

    { note: '3Db',  key: 'u'         },
    { note: '3Eb',  key: 'i'         },
    { note: '3Gb',  key: 'o'         },
    { note: '3Bb',  key: 'p'         },
    { note: '3Bb',  key: '['         },
    { note: '',     key: ']'         },
    { note: '',     key: '\\'        },

    { note: '',    key: 'caps'      },
    { note: '2E',  key: 'a'         },
    { note: '2F',  key: 's'         },
    { note: '2G',  key: 'd'         },
    { note: '2A',  key: 'f'         },
    { note: '2B',  key: 'g'         },

    { note: '3C',  key: 'h'         },
    { note: '3D',  key: 'j'         },
    { note: '3E',  key: 'k'         },
    { note: '3F',  key: 'l'         },
    { note: '3G',  key: ';'         },
    { note: '3A',  key: '\''        },
    { note: '3B',  key: 'return'    },

    { note: '',  key: 'shift'     },
    { note: '',  key: 'z'         },
    { note: '',  key: 'x'         },
    { note: '',  key: 'c'         },
    { note: '',  key: 'v'         },
    { note: '',  key: 'b'         },

    { note: '4C',  key: 'n'         },
    { note: '4D', key: 'm'         },
    { note: '4E',  key: ','         },
    { note: '4F', key: '.'         },
    { note: '4G',  key: '/'         },
    { note: '4A',    key: 'shift'     },

    { note: '',    key: 'ctrl'      },
    { note: '',    key: 'opt'       },
    { note: '',    key: 'left-cmd'  },
    { note: '', key: 'space'     },

    { note: '',  key: 'right-cmd' },
    { note: '',  key: 'opt'       },
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
