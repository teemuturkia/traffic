'use strict';

/**
 * @ngdoc function
 * @name traffic.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the traffic
 */
angular.module('traffic')
  .controller('NavigationCtrl', function() {
    var vm = this;
    
    vm.menus = [{
        name: 'navigation.track-train',
        link: 'train-tracking'
    }];
  });
