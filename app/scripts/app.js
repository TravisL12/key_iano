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
