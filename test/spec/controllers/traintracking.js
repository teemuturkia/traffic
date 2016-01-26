'use strict';

describe('Controller: TraintrackingCtrl', function () {

  // load the controller's module
  beforeEach(module('trafficApp'));

  var TraintrackingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TraintrackingCtrl = $controller('TraintrackingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TraintrackingCtrl.awesomeThings.length).toBe(3);
  });
});
