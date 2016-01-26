'use strict';

/**
 * @ngdoc service
 * @name traffic.trainTrackingService
 * @description
 * # trainTrackingService
 * Service in the traffic.
 */
angular.module('traffic')
  .service('trainTrackingService', function($http) {
    var stompClient = null;
    var subscription;
    
    function getHistory(trainNumber) {
      var url = 'http://rata.digitraffic.fi/api/v1/train-tracking/' + trainNumber + '?departure_date=2016-01-26';
      return $http.get(url);
    }

    var trainTrackingService = {
      track: function(trainNumber, callback) {
        getHistory(trainNumber).then(function(response) {
          var message = _.maxBy(response.data, 'version');
          callback(message);
        });

        var socket = new SockJS('http://rata.digitraffic.fi/api/v1/websockets/train-tracking');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function(frame) {
          console.log('frame', frame);
          subscription = stompClient.subscribe('/' + trainNumber, function(message) {
            callback(angular.fromJson(message.body)[0]);
          });
        });
      },
      stop: function() {
        if (subscription) {
          subscription.unsubscribe();  
        }
        if (stompClient) {
          stompClient.disconnect();
        }
      }
    };

    return trainTrackingService;
  });
