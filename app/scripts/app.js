'use strict';

/**
 * @ngdoc overview
 * @name traffic
 * @description
 * # traffic app
 *
 * Main module of the application.
 */
angular
  .module('traffic', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'angular.filter',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate'
  ])

  /**
   * config localization
   */
  .config(function($translateProvider, $translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart('navigation');
    $translatePartialLoaderProvider.addPart('application');

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: 'i18n/{lang}.{part}.json'
    });

    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.preferredLanguage('fi');
  })

  /**
   * config routes & states
   */
  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when(/^\/?$/, function($state) {
      $state.go('main', null, {
        location:'replace'
      });
    })
    .otherwise('/404');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .state('train-tracking', {
        url: '/train-tracking',
        templateUrl: 'views/train-tracking.html',
        controller: 'TrainTrackingCtrl',
        controllerAs: 'vm'
      })
      .state('notfound', {
        url: '/404',
        template: '<div>404</div>'
      });
  });
