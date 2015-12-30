'use strict';

/**
 * @ngdoc service
 * @name keyIanoNewApp.notes
 * @description
 * # notes
 * Factory in the keyIanoNewApp.
 */
 angular.module('keyIanoNewApp').factory('Notes', function () {

  // Used when clicking on something
  var charDict = {
    'del'         : '8',   'tab': '9',
    'return'      : '13',  'shift': '16',
    'ctrl'        : '17',  'opt': '18',
    'pause/break' : '19',  'caps': '20',
    'escape'      : '27',  'space': '32',
    'page up'     : '33',  'page down': '34',
    'end'         : '35',  'home': '36',
    'left arrow'  : '37',  'up arrow': '38',
    'right arrow' : '39',  'down arrow': '40',
    'insert'      : '45',  'delete': '46',

    '0'           : '48',  '1': '49',
    '2'           : '50',  '3': '51',
    '4'           : '52',  '5': '53',
    '6'           : '54',  '7': '55',
    '8'           : '56',  '9': '57',

    'a'           : '65',  'b': '66',
    'c'           : '67',  'd': '68',
    'e'           : '69',  'f': '70',
    'g'           : '71',  'h': '72',
    'i'           : '73',  'j': '74',
    'k'           : '75',  'l': '76',
    'm'           : '77',  'n': '78',
    'o'           : '79',  'p': '80',
    'q'           : '81',  'r': '82',
    's'           : '83',  't': '84',
    'u'           : '85',  'v': '86',
    'w'           : '87',  'x': '88',
    'y'           : '89',  'z': '90',

    'left-cmd'    : '91',  'right-cmd': '92',

    'numpad 0'    : '96',  'numpad 1': '97',
    'numpad 2'    : '98',  'numpad 3': '99',
    'numpad 4'    : '100', 'numpad 5': '101',
    'numpad 6'    : '102', 'numpad 7': '103',
    'numpad 8'    : '104', 'numpad 9': '105',

    'multiply'    : '106', 'add': '107',
    'subtract'    : '109', 'decimal point': '110',
    'divide'      : '111',

    'f1'          : '112', 'f2': '113',
    'f3'          : '114', 'f4': '115',
    'f5'          : '116', 'f6': '117',
    'f7'          : '118', 'f8': '119',
    'f9'          : '120', 'f10': '121',
    'f11'         : '122', 'f12': '123',

    'num lock'    : '144', 'scroll lock': '145',
    ';'           : '186', 'equal': '187',
    ','           : '188', 'dash': '189',
    '.'           : '190', '/': '191',
    '`'           : '192', '[': '219',
    '\\'          : '220', ']': '221',
    '\''          : '222'
  };

  // Used for keypresses
  var keyCodeDict = {
    8:   { note: '',     key: 'del'         },  9:   { note: '',        key: 'tab'        },
    13:  { note: 'A0',   key: 'return'      },  16:  { note: 'Bb0',     key: 'shift'      },
    17:  { note: 'B0',   key: 'ctrl'        },  18:  { note: 'C1',      key: 'opt'        },
    19:  { note: 'Db1',  key: 'pause/break' },  20:  { note: 'D1',      key: 'caps'       },
    27:  { note: 'Eb1',  key: 'escape'      },  32:  { note: 'E1',      key: 'space'      },
    33:  { note: 'F1',   key: 'page up'     },  34:  { note: 'Gb1',     key: 'page down'  },
    35:  { note: 'G1',   key: 'end'         },  36:  { note: 'Ab1',     key: 'home'       },
    37:  { note: 'A1',   key: 'left arrow'  },  38:  { note: 'Bb1',     key: 'up arrow'   },
    39:  { note: 'B1',   key: 'right arrow' },  40:  { note: 'C2',      key: 'down arrow' },
    45:  { note: 'Db2',  key: 'insert'      },  46:  { note: 'D2',      key: 'delete'     },

    48:  { note: 'Eb2',  key: '0'           },  49:  { note: 'E2',      key: '1' },
    50:  { note: 'F2',   key: '2'           },  51:  { note: 'Gb2',     key: '3' },
    52:  { note: 'G2',   key: '4'           },  53:  { note: 'Ab2',     key: '5' },
    54:  { note: 'A2',   key: '6'           },  55:  { note: 'Bb2',     key: '7' },
    56:  { note: 'B2',   key: '8'           },  57:  { note: 'C3',      key: '9' },

    65:  { note: 'Db3',  key: 'a'           },  66:  { note: 'D3',      key: 'b' },
    67:  { note: 'Eb3',  key: 'c'           },  68:  { note: 'E3',      key: 'd' },
    69:  { note: 'F3',   key: 'e'           },  70:  { note: 'Gb3',     key: 'f' },
    71:  { note: 'G3',   key: 'g'           },  72:  { note: 'Ab3',     key: 'h' },
    73:  { note: 'A3',   key: 'i'           },  74:  { note: 'Bb3',     key: 'j' },
    75:  { note: 'B3',   key: 'k'           },  76:  { note: 'C4',      key: 'l' },
    77:  { note: 'Db4',  key: 'm'           },  78:  { note: 'D4',      key: 'n' },
    79:  { note: 'Eb4',  key: 'o'           },  80:  { note: 'E4',      key: 'p' },
    81:  { note: 'F4',   key: 'q'           },  82:  { note: 'Gb4',     key: 'r' },
    83:  { note: 'G4',   key: 's'           },  84:  { note: 'Ab4',     key: 't' },
    85:  { note: 'A4',   key: 'u'           },  86:  { note: 'Bb4',     key: 'v' },
    87:  { note: 'B4',   key: 'w'           },  88:  { note: 'C5',      key: 'x' },
    89:  { note: 'Db5',  key: 'y'           },  90:  { note: 'D5',      key: 'z' },

    91:  { note: 'Eb5',  key: 'left-cmd'    },  92:  { note: 'E5',      key: 'right-cmd' },
    93:  { note: 'F5',   key: 'right-cmd'   },

    96:  { note: 'Gb5',  key: 'numpad 0'    },  97:  { note: 'G5',      key: 'numpad 1' },
    98:  { note: 'Ab5',  key: 'numpad 2'    },  99:  { note: 'A5',      key: 'numpad 3' },
    100: { note: 'Bb5',  key: 'numpad 4'    },  101: { note: 'B5',      key: 'numpad 5' },
    102: { note: 'C6',   key: 'numpad 6'    },  103: { note: 'Db6',     key: 'numpad 7' },
    104: { note: 'D6',   key: 'numpad 8'    },  105: { note: 'Eb6',     key: 'numpad 9' },

    106: { note: 'E6',   key: 'multiply'    },  107: { note: 'F6',      key: 'add'           },
    109: { note: 'Gb6',  key: 'subtract'    },  110: { note: 'G6',      key: 'decimal point' },
    111: { note: 'Ab6',  key: 'divide'      },

    112: { note: 'A6',   key: 'f1'          },  113: { note: 'Bb6',     key: 'f2'  },
    114: { note: 'B6',   key: 'f3'          },  115: { note: 'C7',      key: 'f4'  },
    116: { note: 'Db7',  key: 'f5'          },  117: { note: 'D7',      key: 'f6'  },
    118: { note: 'Eb7',  key: 'f7'          },  119: { note: 'E7',      key: 'f8'  },
    120: { note: 'F7',   key: 'f9'          },  121: { note: 'Gb7',     key: 'f10' },
    122: { note: 'G7',   key: 'f11'         },  123: { note: 'Ab7',     key: 'f12' },

    144: { note: 'A7',   key: 'num lock'    },  145: { note: 'Bb7',     key: 'scroll lock' },
    186: { note: 'B7',   key: 'semi'        },  187: { note: 'C8',      key: 'equal'       },
    188: { note: '',     key: 'comma'       },  189: { note: '',        key: 'dash'        },
    190: { note: '',     key: 'period'      },  191: { note: '',        key: 'forw-slash'  },
    192: { note: '',     key: 'tilde'       },  219: { note: '',        key: 'open-brack'  },
    220: { note: '',     key: 'slash'       },  221: { note: '',        key: 'close-brack' },
    222: { note: '',     key: 'sing-quote'  }
  };

  for (var i = 65; i < 90; i++) {
    var a = new window.Howl({
      urls: ['sound/' + keyCodeDict[i].note + '.mp3']
    });
    keyCodeDict[i].sound = a;
  }

  return {
    codeLookup: function(code) {
      return keyCodeDict[code];
    },

    charLookup: function(char) {
      var code = charDict[char];
      return this.codeLookup(code);
    }
  };

});
