'use strict';

/**
 * @ngdoc function
 * @name traffic.controller:TrainTrackingCtrl
 * @description
 * # TrainTrackingCtrl
 * Controller of the traffic
 */
angular.module('traffic')
  .controller('TrainTrackingCtrl', function($timeout, trainTrackingService) {
    var vm = this;
    
    vm.trackTrain = function(trainNumber) {
      vm.message = 'tracking ' + trainNumber;

      trainTrackingService.stop();
      trainTrackingService.track(trainNumber, function(message) {
        $timeout(function() {
          vm.message = message;
        });
      });    
    };
  });
