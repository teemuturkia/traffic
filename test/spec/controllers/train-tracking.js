'use strict';

describe('Controller: TrainTrackingCtrl', function () {

  // load the controller's module
  beforeEach(module('trafficApp'));

  var TrainTrackingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrainTrackingCtrl = $controller('TrainTrackingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TrainTrackingCtrl.awesomeThings.length).toBe(3);
  });
});
