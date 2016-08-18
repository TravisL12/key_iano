'use strict';

/**
 * @ngdoc overview
 * @name keyIanoNewApp
 * @description
 * # keyIanoNewApp
 *
 * Main module of the application.
 */
angular
  .module('keyIanoNewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('KeyCodes', {
    '`':      192,
    '1':      49,
    '2':      50,
    '3':      51,
    '4':      52,
    '5':      53,
    '6':      54,
    '7':      55,
    '8':      56,
    '9':      57,
    '0':      48,
    '-':      189,
    '=':      187,
    'del':    8,
    'tab':    9,
    'q':      81,
    'w':      87,
    'e':      69,
    'r':      82,
    't':      84,
    'y':      89,
    'u':      85,
    'i':      73,
    'o':      79,
    'p':      80,
    '[':      219,
    ']':      221,
    '\\':     220,
    'caps':   20,
    'a':      65,
    's':      83,
    'd':      68,
    'f':      70,
    'g':      71,
    'h':      72,
    'j':      74,
    'k':      75,
    'l':      76,
    ';':      186,
    '\'':     222,
    'return': 13,
    'z':      90,
    'x':      88,
    'c':      67,
    'v':      86,
    'b':      66,
    'n':      78,
    'm':      77,
    ',':      188,
    '.':      190,
    '/':      191,
    'shift':  16,
    'ctrl':   17,
    'opt':    18,
    'left-cmd' :   91,
    'space':  32,
    'right-cmd' :   93
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/keyboard.html',
        controller: 'KeyboardCtrl',
        controllerAs: 'keyboard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
